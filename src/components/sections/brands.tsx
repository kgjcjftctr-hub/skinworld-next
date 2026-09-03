'use client';

import Link from 'next/link';
import { getConfirmedBrands } from '@/lib/catalog';

/**
 * El campo `brand` estructurado solo aparece en los 4 productos de
 * ejemplo/semilla (ver `getRealProducts` en `@/lib/catalog`) -- ningún
 * producto real del catálogo trae marca estructurada hoy (viene, si acaso,
 * embebida en el nombre). Por eso `getConfirmedBrands()` devuelve una lista
 * vacía en producción y esta sección no renderiza nada todavía: en vez de
 * inventar marcas o adivinar a partir del nombre, se queda oculta hasta que
 * el catálogo real tenga datos de marca estructurados. El día que los
 * tenga, esta sección se activa sola sin tocar el componente.
 */
export function BrandsSection() {
  const brands = getConfirmedBrands();

  if (brands.length === 0) return null;

  return (
    <section className="py-16 bg-white border-y border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-300 text-center mb-8">
          Algunas marcas de nuestro catálogo
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/tienda?marca=${encodeURIComponent(brand.name)}`}
              className="font-serif text-2xl sm:text-3xl text-ink-300 hover:text-ink-900 transition-colors tracking-wide"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
