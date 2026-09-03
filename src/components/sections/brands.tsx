'use client';

import Link from 'next/link';
import { getConfirmedBrands } from '@/lib/catalog';

/**
 * La mayoría de los 165 productos no traen el campo `brand` estructurado
 * (viene embebido en el nombre del producto), así que esta lista muestra
 * únicamente las marcas que sí podemos confirmar con datos reales. No se
 * usan logos porque no tenemos los archivos reales -- son wordmarks
 * tipográficos, honestos sobre lo que es: una muestra, no el catálogo
 * completo de marcas.
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
