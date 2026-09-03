'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getRealProducts, getCategoryCounts } from '@/lib/catalog';

const FALLBACK_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f7f5f4" width="400" height="400"/%3E%3C/svg%3E';

export function HeroSection() {
  const realProducts = getRealProducts();
  const categoryCount = Object.keys(getCategoryCounts()).length;
  // Dos productos reales para el collage visual del hero -- nada de
  // fotografía de stock ni de "modelo" inventada, solo el catálogo real.
  const [visualA, visualB] = [realProducts[20], realProducts[60]].filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-paper to-paper-100" />
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-primary-100 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              Dermatología Profesional
            </span>

            <h1 className="text-6xl sm:text-7xl mb-6">
              Tu piel,{' '}
              <span className="italic text-primary-500">bien acompañada</span>
            </h1>

            <p className="text-lg text-ink-500 leading-relaxed mb-10 max-w-md">
              Un catálogo dermatológico seleccionado por una especialista certificada
              -- sin adivinar qué le sirve a tu piel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/tienda" className="btn btn-primary">
                Explorar productos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/sobre-nosotros" className="btn btn-secondary">
                Conocer a la Dra. Karina
              </Link>
            </div>

            <div className="flex items-center gap-10">
              <div>
                <p className="font-serif text-3xl text-ink-900">{realProducts.length}+</p>
                <p className="text-sm text-ink-500">Productos</p>
              </div>
              <div className="w-px h-10 bg-ink-100" />
              <div>
                <p className="font-serif text-3xl text-ink-900">{categoryCount}</p>
                <p className="text-sm text-ink-500">Categorías dermatológicas</p>
              </div>
              <div className="w-px h-10 bg-ink-100" />
              <div>
                <p className="font-serif text-3xl text-ink-900">1</p>
                <p className="text-sm text-ink-500">Dermatóloga certificada</p>
              </div>
            </div>
          </div>

          {/* Collage visual con productos reales -- object-contain (no
              cover) porque son fotos de empaque de producto, no fotografía
              de estilo de vida: recortarlas con "cover" se veía invasivo y
              perdía el empaque. Se presentan como piezas, no como fondo. */}
          <div className="relative hidden sm:block max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated bg-primary-100 p-10 flex items-center justify-center">
              {visualA && (
                <img
                  src={visualA.image}
                  alt={visualA.name}
                  className="max-w-full max-h-full object-contain drop-shadow-xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                />
              )}
            </div>

            {visualB && (
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl shadow-elevated border-4 border-paper bg-white p-3 flex items-center justify-center">
                <img
                  src={visualB.image}
                  alt={visualB.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                />
              </div>
            )}

            <div className="absolute top-6 -right-4 bg-white px-5 py-4 rounded-2xl shadow-elevated border border-ink-100 max-w-[11rem]">
              <p className="text-xs font-semibold text-ink-300 uppercase tracking-wider mb-1">
                Respaldo
              </p>
              <p className="font-serif text-lg text-ink-900 leading-snug">
                Seleccionado por dermatóloga
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
