# 📊 Guía de Migración de Datos

Instrucciones para migrar datos de WooCommerce actual a la nueva plataforma.

## 📋 Datos a Migrar

### 1. Productos
- [ ] Nombre
- [ ] Descripción
- [ ] Precio
- [ ] Imágenes
- [ ] Categoría
- [ ] Marca
- [ ] SKU
- [ ] Stock/Inventario

### 2. Categorías
- [ ] Nombre
- [ ] Descripción
- [ ] Imagen/Icono

### 3. Órdenes (Históricas)
- [ ] Número de orden
- [ ] Cliente
- [ ] Email
- [ ] Dirección de envío
- [ ] Total
- [ ] Items
- [ ] Estado
- [ ] Fecha

### 4. Clientes
- [ ] Email
- [ ] Nombre
- [ ] Teléfono
- [ ] Dirección guardada

### 5. Contenido
- [ ] Artículos de blog
- [ ] Páginas estáticas
- [ ] Políticas (envío, devoluciones, privacidad)

---

## 🔄 Proceso de Migración

### Paso 1: Exportar de WooCommerce

#### Opción A: Via Admin de WordPress

1. WordPress Admin → **Productos** → **Todos los productos**
2. Click en seleccionar todo
3. **Acciones en lote** → **Exportar**
4. Descarga CSV

#### Opción B: Via Plugin (Recomendado)

1. Instala plugin **"WooCommerce Product CSV Export"**
2. Configura exportación
3. Descarga `products.csv`

#### Opción C: Via Herramienta (Avanzado)

```bash
# Si tienes acceso SSH a servidor WordPress
wp woocommerce product list --format=csv > products.csv
wp woocommerce order list --format=csv > orders.csv
```

### Paso 2: Transformar Datos al Formato Nuevo

Necesitamos CSV así:

```csv
id,name,slug,description,price,compareAtPrice,brand,sku,category,problemType,productType,image,images,inStock,featured
1,Limpiador Facial,limpiador-facial,"Limpiador suave...",450,550,A-DERMA,AD-001,Limpiadores,Acné,Limpiador,url-imagen.jpg,"url1.jpg,url2.jpg",10,1
```

**Script Python para transformar:**

```python
import csv
from slug import slug as make_slug

with open('products_original.csv', 'r', encoding='utf-8') as f_in:
    with open('products_new.csv', 'w', encoding='utf-8', newline='') as f_out:
        reader = csv.DictReader(f_in)
        fieldnames = ['id', 'name', 'slug', 'description', 'price', 'compareAtPrice', 'brand', 'sku', 'category', 'problemType', 'productType', 'image', 'images', 'inStock', 'featured']
        writer = csv.DictWriter(f_out, fieldnames=fieldnames)
        writer.writeheader()
        
        for i, row in enumerate(reader, 1):
            new_row = {
                'id': str(i),
                'name': row['post_title'],
                'slug': make_slug(row['post_title']),
                'description': row['post_content'],
                'price': row['_price'],
                'compareAtPrice': row.get('_regular_price', ''),
                'brand': row.get('pa_brand', ''),
                'sku': row['_sku'],
                'category': row['post_category'],
                'problemType': '', # Llenar manualmente
                'productType': '', # Llenar manualmente
                'image': row['images'][0] if row['images'] else '',
                'images': '|'.join(row['images'].split(',')),
                'inStock': min(int(row.get('_stock', 0)), 999),
                'featured': '1' if row.get('_featured') == 'yes' else '0',
            }
            writer.writerow(new_row)
```

### Paso 3: Cargar en BD Nueva

#### Opción A: Via Script SQL

```sql
-- Insertar productos desde CSV
.mode csv
.import /ruta/a/products.csv products

-- Verificar
SELECT COUNT(*) FROM products;
```

#### Opción B: Via API (Próximamente)

```bash
curl -X POST http://localhost:3000/api/admin/products/bulk-import \
  -H "Content-Type: application/json" \
  -d '{"file": "products.csv"}'
```

### Paso 4: Verificar y Limpiar

```sql
-- Verificar productos importados
SELECT COUNT(*) FROM products;

-- Ver primeros registros
SELECT id, name, price FROM products LIMIT 10;

-- Verificar datos faltantes
SELECT * FROM products WHERE name IS NULL OR price IS NULL;

-- Limpiar datos corruptos
DELETE FROM products WHERE price < 0;
```

---

## 📸 Migración de Imágenes

### Opción A: Cloudflare R2 (Recomendado)

1. Descargar todas las imágenes de WooCommerce

```bash
# Script bash para descargar
wget -i imagenes.txt -P ./productos/
```

2. Subir a Cloudflare R2

```bash
# Instalar AWS CLI
npm install -g aws-cli

# Configurar credenciales R2
aws configure --profile r2
AWS_ACCESS_KEY_ID: [tu key]
AWS_SECRET_ACCESS_KEY: [tu secret]

# Subir
aws s3 sync ./productos/ s3://skinworld-products/ --profile r2 --endpoint-url https://[account].r2.cloudflareclient.com
```

3. Actualizar URLs en BD

```sql
UPDATE products 
SET image = REPLACE(image, 'oldhost.com', 'r2.cloudflareclient.com/skinworld-products')
WHERE image LIKE 'oldhost.com%';
```

### Opción B: Manual

1. Descargar imágenes
2. Optimizar con TinyPNG/Squoosh
3. Renombrar a: `product-{id}.jpg`
4. Subir a R2
5. Actualizar URLs

---

## 👥 Migración de Clientes

```sql
INSERT INTO users (id, email, name, phone, isVerified, createdAt, updatedAt)
SELECT 
  ID,
  user_email,
  display_name,
  meta_value, -- (si tienes teléfono en meta)
  1, -- asume verificados
  user_registered,
  user_registered
FROM wordpress.wp_users
WHERE NOT EXISTS (SELECT 1 FROM users u WHERE u.email = wordpress.wp_users.user_email);
```

---

## 📋 Migración de Órdenes

```sql
INSERT INTO orders (id, orderNumber, email, status, total, subtotal, tax, shippingCost, items, createdAt)
SELECT
  post_id,
  post_name,
  meta_value, -- (meta key: _billing_email)
  post_status,
  meta_value, -- (meta key: _order_total)
  meta_value, -- (meta key: _order_subtotal)
  meta_value, -- (meta key: _order_tax)
  meta_value, -- (meta key: _order_shipping)
  '', -- Items JSON (procesar por separado)
  post_date
FROM wordpress.wp_posts
WHERE post_type = 'shop_order';
```

---

## ✅ Checklist de Migración

- [ ] Exportar datos de WooCommerce
- [ ] Transformar a formato nuevo
- [ ] Verificar integridad de datos
- [ ] Cargar en BD nueva
- [ ] Descargar imágenes
- [ ] Subir a Cloudflare R2
- [ ] Actualizar URLs en BD
- [ ] Testing: buscar productos
- [ ] Testing: ver detalles
- [ ] Testing: agregar carrito
- [ ] Validar 100+ productos random
- [ ] Backup de datos viejos
- [ ] ¡Go live!

---

## 🆘 Troubleshooting

### Error: "Duplicate key" en BD
```sql
DELETE FROM products WHERE name IN (SELECT name FROM products GROUP BY name HAVING COUNT(*) > 1);
```

### Imágenes rotas
```sql
UPDATE products SET image = '' WHERE image LIKE '%404%' OR image LIKE '%broken%';
```

### Caracteres raros en texto
```sql
UPDATE products SET description = TRIM(description);
UPDATE products SET description = REPLACE(description, '&#8217;', "'");
```

---

## 📊 Script Completo de Migración (Python)

```python
#!/usr/bin/env python3
import csv
import sqlite3
from pathlib import Path

DATABASE = 'skinworld.db'
CSV_FILE = 'products_export.csv'

def migrate_products():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    
    with open(CSV_FILE, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                cursor.execute('''
                    INSERT INTO products 
                    (id, name, slug, description, price, brand, sku, category, inStock, featured, createdAt)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
                ''', (
                    row['id'],
                    row['name'],
                    row['slug'],
                    row['description'],
                    float(row['price']),
                    row.get('brand', ''),
                    row.get('sku', ''),
                    row.get('category', ''),
                    int(row.get('inStock', 0)),
                    int(row.get('featured', 0)),
                ))
                print(f"✅ Migrado: {row['name']}")
            except Exception as e:
                print(f"❌ Error en {row['name']}: {e}")
                
    conn.commit()
    conn.close()
    print(f"✅ Migración completada!")

if __name__ == '__main__':
    migrate_products()
```

Ejecutar:
```bash
python migrate.py
```

---

## 📞 Si Necesitas Ayuda

1. Prepara: `products.csv`, `orders.csv`, lista de imágenes
2. Envía a: hola@skinworld.mx
3. Incluye: numero de productos, rango de precios, categorías usadas

---

**Siguiente Fase**: Integración de Stripe, panel admin, automatización.
