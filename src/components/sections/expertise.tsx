'use client';

import { Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function ExpertiseSection() {
  return (
    <section className="py-section bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Foto real de la Dra. Karina Alfaro */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-elevated">
              <picture>
                <source srcSet="/images/team/dra-karina-alfaro.webp" type="image/webp" />
                <img
                  src="/images/team/dra-karina-alfaro.jpg"
                  alt="Dra. Karina Alfaro, dermatóloga"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>

          {/* Contenido -- mismos datos ya aprobados en /sobre-nosotros, sin
              editorializar ni agregar cifras nuevas. */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              Detrás de Skin World
            </div>
            <h2 className="text-white mb-6">Dra. Karina Alfaro López</h2>
            <p className="text-white/70 mb-10 max-w-md">
              Especialista en Dermatología con 25 años de experiencia profesional.
              Cada producto en Skin World ha sido seleccionado con criterio médico
              y científico.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">25 años de experiencia</p>
                  <p className="text-white/60 text-sm">Trayectoria profesional comprobada</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Certificada profesionalmente</p>
                  <p className="text-white/60 text-sm">
                    Consejo Mexicano de Dermatología (vigencia 2030)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Miembro de asociaciones</p>
                  <p className="text-white/60 text-sm">
                    Academia Mexicana, Sociedad de Dermatoscopia y Colegio Iberoamericano
                  </p>
                </div>
              </div>
            </div>

            <Link href="/sobre-nosotros" className="btn btn-primary">
              Conocer más sobre la Dra. Karina
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
