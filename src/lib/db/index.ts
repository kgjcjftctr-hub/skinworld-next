// NOTA: better-sqlite3 se quito de package.json porque es un addon nativo de
// Node en C++ y no puede correr en el runtime de Cloudflare Pages Functions
// ni Workers, ademas de que rompia el build ahi. Este archivo todavia no lo
// usa ninguna pagina ni ruta de la app.
//
// Cuando conectes la base de datos real, usa Cloudflare D1 con el driver
// drizzle-orm slash d1. El archivo schema.ts ya esta en formato sqlite-core
// y se reutiliza casi sin cambios, solo cambia el driver de conexion.
//
// El binding de D1 se obtiene del contexto de Cloudflare en cada request,
// por ejemplo con getRequestContext desde el paquete
// at-cloudflare slash next-on-pages, no de una variable de entorno
// DATABASE_URL como antes.

export type Placeholder = never;
