# ⚡ Guía Rápida: Cloudflare Setup

## 🎯 3 Pasos Básicos (5 minutos)

### PASO 1: Subir a GitHub

```bash
# 1. Crear repo en github.com (nuevo repo vacío)
# 2. Ejecutar en la carpeta del proyecto:

git remote add origin https://github.com/TU_USUARIO/skinworld-next.git
git branch -M main
git push -u origin main
```

### PASO 2: Conectar Cloudflare Pages

1. Ve a [cloudflare.com/products/pages](https://www.cloudflare.com/products/pages)
2. Click **"Log in"** o crea cuenta
3. Dashboard → Pages → **"Create a project"**
4. Selecciona **"Connect to Git"**
5. Autoriza GitHub y selecciona `skinworld-next`
6. Rama: **main**
7. Framework: **Next.js**
8. Build command: **npm run build** (automático)
9. **Save and Deploy** ✅

**Listo en 2 minutos.** Tu URL será: `skinworld-next.pages.dev`

### PASO 3: Configurar Variables de Entorno (Básico)

En **Cloudflare Dashboard** → Tu proyecto → **Settings** → **Environment variables**

Agregua para testing:

```
NODE_VERSION = 18.17.0
NEXT_PUBLIC_SITE_URL = https://skinworld-next.pages.dev
```

Click **"Save"** y redeploy automático.

---

## 🚀 Después: Conectar Dominio Personalizado

1. Compra dominio en cualquier registrador (ej: namecheap)
2. En Cloudflare: Pages → Tu proyecto → **Custom domain**
3. Agrega `skinworld.mx`
4. Cloudflare te da nameservers
5. Actualiza nameservers en tu registrador
6. Espera 24-48 horas

**SSL automático** ✅ (Cloudflare lo crea gratis)

---

## 📊 Ver Logs y Analytics

**En Cloudflare Dashboard:**
- **Deployments** → Ver historial de builds
- **Analytics** → Tráfico, errores, performance
- **Builds** → Ver logs de cada build

---

## ♻️ Workflow Futuro

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Tu cambio"
git push origin main    # ✅ Automatic deploy
```

Cloudflare auto-detecta push y redeploy.

---

## 🆘 Si Algo Falla

### Build fallido?
1. Checks el log en Cloudflare Dashboard
2. Error común: variables de entorno faltantes
3. Solución: agregar variables en Settings

### Página en blanco?
1. Abre DevTools (F12)
2. Ver errores en Console
3. Común: falta NODE_VERSION o NODE_ENV

### Lento?
1. Cloudflare tiene CDN gratis
2. Activa **"Caching"** en Settings
3. Performance → "Auto Minify" (CSS, JS, HTML)

---

## 📝 Variables Futuras (Cuando Tengas Apis)

Después agregarás:

```env
STRIPE_SECRET_KEY=sk_test_xxx
SENDGRID_API_KEY=SG.xxx
DATABASE_URL=d1-cloudflare-connection
```

En el mismo lugar: **Settings** → **Environment variables**

---

## ✨ Característica Especial: Cloudflare Workers

Para rutas de API avanzadas (próxima fase), Cloudflare Pages auto-soporta:

```typescript
// src/app/api/route.ts
export const runtime = 'edge';  // Ejecuta en edge de Cloudflare

export async function GET() {
  return new Response('Hola desde edge', { status: 200 });
}
```

Despliega automáticamente.

---

## 📞 Soporte Cloudflare

- [Docs](https://developers.cloudflare.com/pages)
- [Discord](https://discord.gg/cloudflaredev)
- [Community](https://community.cloudflare.com)

---

**🎉 ¡Eso es! Tu sitio está en la web en minutos.**

Siguiente: Agregarás BD, pagos, imágenes con R2, etc.
