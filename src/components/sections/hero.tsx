import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
              <span>✨ Dermatología Profesional</span>
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Tu piel merece
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              expertise profesional
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Productos dermatológicos de calidad formulados y respaldados por profesionales en salud de la piel. Soluciones efectivas para cada necesidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tienda"
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Explorar Tienda</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center space-x-2 border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200"
            >
              <span>Conocer Más</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">170+</div>
              <p className="text-sm text-slate-600">Productos</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
              <p className="text-sm text-slate-600">Profesional</p>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-2xl font-bold text-primary-600 mb-1">+5k</div>
              <p className="text-sm text-slate-600">Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
