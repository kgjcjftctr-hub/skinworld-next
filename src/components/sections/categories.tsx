'use client';

import Link from 'next/link';
import { getCategoryCounts, getCategoryThumbnail } from '@/lib/catalog';

const FALLBACK_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f7f5f4" width="400" height="400"/%3E%3C/svg%3E';

// Orden editorial de las categorías reales (de mayor a menor número de
// productos, con "Productos" -- el catálogo general -- al final). No se
// inventan categorías nuevas: son exactamente las que existen en
// products-data.json, así que cada tarjeta siempre lleva a resultados reales.
const CATEGORY_ORDER = [
  'Dermatitis',
  'Antiedad',
  'Acné',
  'Cabello y Uñas',
  'Manchas',
  'Piel de Bebé',
];

export function CategoriesSection() {
  const counts = getCategoryCounts();
  const categories = CATEGORY_ORDER.filter((c) => counts[c] > 0);

  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-3">
            Catálogo real, sin adivinar
          </p>
          <h2 className="mb-4">Explora por necesidad</h2>
          <p>
            Cada categoría corresponde a productos reales de nuestro catálogo,
            organizados por el tipo de piel o condición que atienden.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => {
            const thumb = getCategoryThumbnail(category);
            return (
              <Link
                key={category}
                href={`/tienda?categoria=${encodeURIComponent(category)}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-ink-50"
              >
                {thumb ? (
                  <img
                    src={thumb}
                    alt={category}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-110"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="font-serif text-white text-lg sm:text-xl leading-tight mb-1">
                    {category}
                  </h3>
                  <p className="text-white/80 text-xs">
                    {counts[category]} producto{counts[category] === 1 ? '' : 's'}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
