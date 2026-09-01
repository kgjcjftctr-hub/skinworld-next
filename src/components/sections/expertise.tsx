import Link from 'next/link';
import { CheckCircle2, Award, Heart } from 'lucide-react';

export function ExpertiseSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center text-primary-600">
              <div className="text-center">
                <div className="text-6xl mb-4"></div>
                <p className="text-lg font-semibold">Profesional</p>
                <p className="text-sm text-slate-600">Dermatóloga</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Respaldo Profesional</span>
              </span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Expertise dermatológico detrás de cada producto
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Skin World está respaldada por una dermatóloga con amplia experiencia y trayectoria profesional. Cada producto ha sido seleccionado y recomendado por profesionales de la salud de la piel.
            </p>

            {/* Dermatologist Info */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-slate-200">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Dra. Karina Alfaro López
                </h3>
                <p className="text-sm text-primary-600 font-semibold">
                  Especialista en Dermatología
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">25 años de experiencia profesional</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Certificada por el Consejo Mexicano de Dermatología (vigencia 2030)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Miembro Activo de Academia Mexicana de Dermatología</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Formación: UNAM, Hospital ABC, Centro Médico Nacional 20 de Noviembre</span>
                </li>
              </ul>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Profesional Certificada</p>
                  <p className="text-xs text-slate-600">Experta en dermatología</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Orientada al Bienestar</p>
                  <p className="text-xs text-slate-600">Enfoque en salud de la piel</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200"
            >
              <span>Conocer más sobre nosotros</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
