'use client';

import { Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function ExpertiseSection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-6">
              Detrás de Skin World
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
              Dra. Karina Alfaro López
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Especialista en Dermatología con 25 años de experiencia profesional. Cada producto en Skin World ha sido seleccionado con criterio médico y científico.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">25 años de experiencia</p>
                  <p className="text-slate-600 text-sm">Trayectoria profesional comprobada</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Certificada profesionalmente</p>
                  <p className="text-slate-600 text-sm">Consejo Mexicano de Dermatología (vigencia 2030)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Miembro de asociaciones</p>
                  <p className="text-slate-600 text-sm">Academia Mexicana, Sociedad de Dermatoscopia y Colegio Iberoamericano</p>
                </div>
              </div>
            </div>

            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              <span>Conocer más sobre la Dra. Karina</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right - Visual */}
          <div>
            <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl aspect-square flex items-center justify-center text-primary-600 text-6xl font-bold shadow-2xl">
              Dra.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
