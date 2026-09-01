# Skin World - Nueva Plataforma E-commerce

Plataforma moderna de e-commerce dermatológico construida con Next.js 15, React 18, TypeScript, Tailwind CSS y desplegada en Cloudflare.

## 📋 Tabla de Contenidos

1. [Requisitos](#requisitos)
2. [Instalación Local](#instalación-local)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Configuración de Cloudflare](#configuración-de-cloudflare)
5. [Variables de Entorno](#variables-de-entorno)
6. [Comandos Útiles](#comandos-útiles)
7. [Deployment a Cloudflare](#deployment-a-cloudflare)
8. [Próximos Pasos](#próximos-pasos)

---

## 📦 Requisitos

- **Node.js**: v18.17.0 o superior
- **npm**: v9.0.0 o superior (o yarn/pnpm)
- **Git**: para control de versiones
- **Cuenta de Cloudflare**: con plan gratuito mínimo

---

## 🚀 Instalación Local

### 1. Clonar o descargar el repositorio

```bash
cd skinworld-next
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo de variables de entorno

```bash
cp .env.example .env.local
```

### 4. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 5. Generar migraciones de BD (opcional para desarrollo)

```bash
npm run db:generate
npm run db:push
```

---

## 📁 Estructura del Proyecto

```
skinworld-next/
├── src/
│   ├── app/                    # Rutas y layout principal de Next.js
│   │   ├── layout.tsx          # Layout raíz
│   │   ├── page.tsx            # Página de inicio
│   │   ├── tienda/             # Tienda
│   │   ├── carrito/            # Carrito de compras
│   │   ├── contacto/           # Página de contacto
│   │   └── api/                # Rutas API (próximamente)
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── sections/           # Secciones de página
│   │       ├── hero.tsx
│   │       ├── featured-products.tsx
│   │       ├── categories.tsx
│   │       ├── expertise.tsx
│   │       ├── blog-preview.tsx
│   │       └── cta.tsx
│   │
│   ├── lib/                    # Lógica compartida
│   │   └── db/
│   │       ├── schema.ts       # Esquema de BD con Drizzle
│   │       └── index.ts        # Conexión a BD
│   │
│   ├── store/                  # Estado global (Zustand)
│   │   └── cart.ts             # Store del carrito
│   │
│   ├── types/                  # Tipos TypeScript
│   │   └── index.ts
│   │
│   ├── utils/                  # Funciones utilitarias
│   │   └── index.ts
│   │
│   └── styles/                 # Estilos globales
│       └── globals.css
│
├── public/                     # Archivos estáticos
│   └── favicon.ico
│
├── migrations/                 # Migraciones de BD (generadas)
│
├── .env.example                # Variables de ejemplo
├── .gitignore                  # Ignorar archivos
├── drizzle.config.ts           # Config de Drizzle ORM
├── next.config.js              # Config de Next.js
├── package.json                # Dependencias
├── postcss.config.js           # Config de PostCSS
├── tailwind.config.ts          # Config de Tailwind
└── tsconfig.json               # Config de TypeScript
```

---

## ⚙️ Configuración de Cloudflare

### Paso 1: Crear Cuenta en Cloudflare (si no tienes)

1. Ve a [cloudflare.com](https://www.cloudflare.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### Paso 2: Configurar Cloudflare Pages

1. En el dashboard de Cloudflare, ve a **Pages**
2. Click en **Create a project**
3. Selecciona **Connect to Git** (conecta tu repo de GitHub)
4. Autoriza Cloudflare en GitHub
5. Selecciona el repositorio `skinworld-next`
6. Elige la rama `main`

### Paso 3: Configurar Build Settings

En la página de configuración del proyecto:

- **Framework**: Selecciona **Next.js**
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (raíz del proyecto)

### Paso 4: Agregar Variables de Entorno

1. En **Settings** → **Environment variables**, agrega:

```env
NODE_VERSION=18.17.0
DATABASE_URL=file:./data/skinworld.db
NEXT_PUBLIC_SITE_URL=https://skinworld-next.pages.dev
```

(Las demás variables las agregarás después con APIs reales)

### Paso 5: Configurar Cloudflare Workers (para APIs futuras)

1. Ve a **Workers & Pages** → **Create**
2. Crea un nuevo Worker para rutas de API
3. (Configuración detallada en próximas fases)

### Paso 6: Configurar Cloudflare R2 (almacenamiento de imágenes)

1. Ve a **R2** en el dashboard
2. Click **Create bucket**
3. Nombre: `skinworld-products`
4. Copiar el **Account ID** y **Access Key** para `.env.local`

### Paso 7: Configurar Cloudflare D1 (base de datos)

1. Ve a **D1** en el dashboard
2. Click **Create database**
3. Nombre: `skinworld`
4. Copiar la string de conexión

---

## 🔐 Variables de Entorno

### Desarrollo Local (`.env.local`)

```env
# Cloudflare
NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID=tu_account_id
CLOUDFLARE_R2_ACCESS_KEY_ID=tu_access_key
CLOUDFLARE_R2_SECRET_ACCESS_KEY=tu_secret_key
CLOUDFLARE_R2_BUCKET_NAME=skinworld-products
CLOUDFLARE_R2_ENDPOINT=https://tu_account.r2.cloudflareclient.com

# Database
DATABASE_URL=file:./data/skinworld.db

# Stripe (cuando tengas cuenta)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Email (cuando configures)
SENDGRID_API_KEY=SG.xxx
SENDGRID_FROM_EMAIL=hola@skinworld.mx

# General
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### Production (en Cloudflare Pages → Settings)

```env
NODE_VERSION=18.17.0
NEXT_PUBLIC_SITE_URL=https://skinworld.mx
DATABASE_URL=cloudflare-d1-connection-string
STRIPE_SECRET_KEY=sk_live_...
SENDGRID_API_KEY=SG.xxx
```

**⚠️ IMPORTANTE**: Nunca commits `.env.local` al repositorio. Está en `.gitignore`.

---

## 🛠 Comandos Útiles

```bash
# Desarrollo
npm run dev                # Inicia servidor en localhost:3000

# Build
npm run build              # Build para production
npm start                  # Inicia server production (local)

# Validación
npm run lint              # Ejecuta ESLint
npm run type-check        # Valida tipos TypeScript

# Base de datos
npm run db:generate       # Genera migraciones
npm run db:push           # Aplica migraciones
npm run db:studio         # Abre Drizzle Studio (interfaz visual de BD)

# Git
git add .
git commit -m "Descripción del cambio"
git push origin main      # Deployment automático en Cloudflare
```

---

## 🚀 Deployment a Cloudflare

### Opción A: Deployment Automático (Recomendado)

1. Asegúrate que el código esté en GitHub
2. Conecta Cloudflare Pages a tu repositorio (ver arriba)
3. Cada `push` a `main` dispara un build automático

```bash
git add .
git commit -m "Nueva feature"
git push origin main   # 🚀 Automatic deployment
```

### Opción B: Deployment Manual con Wrangler

1. Instala Wrangler CLI

```bash
npm install -g wrangler
```

2. Autentica

```bash
wrangler login
```

3. Crea `wrangler.toml` en la raíz

```toml
name = "skinworld"
type = "javascript"
account_id = "tu_account_id"
workers_dev = true

[env.production]
name = "skinworld-prod"
```

4. Deploy

```bash
wrangler deploy
```

---

## 📊 Monitoring y Logs

### En Cloudflare Dashboard

1. Ve a **Pages** → Tu proyecto
2. Tab **Deployments**: ver historial de deploys
3. Tab **Analytics**: tráfico, errores, performance
4. Tab **Settings**: configuración y variables

### Logs Locales

```bash
npm run dev 2>&1 | tee build.log
```

---

## 🔄 Próximos Pasos (Fases)

### ✅ Completado
- [x] Setup inicial (Next.js, Tailwind, TypeScript)
- [x] Componentes base (Header, Footer)
- [x] Página de inicio con secciones
- [x] Página de tienda (estructura)
- [x] Carrito con Zustand
- [x] Página de contacto
- [x] Sistema de colores profesional

### 🔄 En Progreso
- [ ] Integración de BD (Drizzle + D1)
- [ ] API de productos
- [ ] Panel de administración
- [ ] Integración de Stripe/Conekta

### 📋 Por Hacer
- [ ] Autenticación de usuarios
- [ ] Checkout completo
- [ ] Email transaccionales (SendGrid)
- [ ] Optimización de imágenes (R2 + Cloudflare Images)
- [ ] Blog dinámico
- [ ] SEO (sitemap, robots.txt, schema)
- [ ] Tests (unit + E2E)
- [ ] CI/CD mejorado

---

## 🤝 Contribuir

Hacer cambios:

```bash
git checkout -b feature/nombre-feature
# ... hacer cambios ...
git add .
git commit -m "Add feature X"
git push origin feature/nombre-feature
```

Luego crear un Pull Request en GitHub.

---

## 📞 Soporte

- **Email**: hola@skinworld.mx
- **Teléfono**: 55 9104 7107
- **Documentación**: Ver README.md de cada directorio

---

## 📜 Licencia

Propiedad de Skin World. Todos los derechos reservados 2024.

---

## 🎯 Checklist de Deployment

Antes de ir a producción:

- [ ] Variables de entorno configuradas en Cloudflare
- [ ] DB conectada (D1 o Postgres)
- [ ] Stripe/Conekta integrado
- [ ] Email configurado (SendGrid)
- [ ] DNS apuntando a Cloudflare
- [ ] SSL/HTTPS activado
- [ ] Tests ejecutados
- [ ] Performance audit passed
- [ ] SEO audit passed
- [ ] Backup de BD
- [ ] Monitoreo de errores configurado

---

**Última actualización**: Enero 2024

Desarrollado con ❤️ para Skin World
