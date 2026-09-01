import Link from 'next/link';
import { Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-500 to-accent-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          ¿Tienes dudas sobre
          <br />
          tu rutina de cuidado?
        </h2>

        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Contáctanos y nuestro equipo de expertos te ayudará a encontrar los productos perfectos para tu tipo de piel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-200 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Contáctanos</span>
          </Link>

          <a
            href="mailto:hola@skinworld.mx"
            className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            <span>hola@skinworld.mx</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
          <div>
            <p className="text-2xl font-bold text-white mb-1">24h</p>
            <p className="text-sm text-white/70">Respuesta rápida</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white mb-1">100%</p>
            <p className="text-sm text-white/70">Satisfacción</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-2xl font-bold text-white mb-1">CDMX</p>
            <p className="text-sm text-white/70">Ubicación</p>
          </div>
        </div>
      </div>
    </section>
  );
}
