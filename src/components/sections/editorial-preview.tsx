'use client';

import { BookOpen } from 'lucide-react';

/**
 * "Aprende sobre tu piel" -- la sección editorial que pide el brief todavía
 * no tiene contenido real: el /blog actual solo tiene texto Lorem Ipsum de
 * ejemplo. Mostrar eso en el Home sería justo el tipo de contenido falso
 * que no queremos, así que esta sección deja la estructura visual lista
 * (misma cuadrícula que usarán los artículos reales) pero con un estado
 * "próximamente" honesto en vez de títulos inventados. Se reemplaza por
 * artículos reales en cuanto existan.
 */
export function EditorialPreview() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-3">
            Próximamente
          </p>
          <h2 className="mb-4">Aprende sobre tu piel</h2>
          <p>
            Estamos preparando artículos y guías reales, escritos con la Dra.
            Karina, sobre rutinas, ingredientes y cuidado dermatológico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-dashed border-ink-100 bg-paper-50 aspect-[4/3] flex flex-col items-center justify-center text-center px-6"
            >
              <BookOpen className="w-6 h-6 text-ink-300 mb-3" />
              <p className="text-sm text-ink-300">Artículo en preparación</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
