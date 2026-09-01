'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-primary-500 to-primary-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Comienza tu transformación
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-12 max-w-2xl mx-auto">
            Descubre el poder de los productos dermatológicos profesionales. Cada compra incluye la garantía de calidad de Skin World.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all transform hover:scale-105"
            >
              <span>Explorar Tienda</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Contáctanos</span>
            </Link>
          </div>

          {/* Trust */}
          <div className="mt-12 pt-12 border-t border-white border-opacity-20">
            <p className="text-white text-opacity-80 mb-4">Confían en nosotros</p>
            <div className="flex justify-center items-center space-x-8 text-white">
              <div className="text-center">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Original</p>
              </div>
              <div className="w-px h-8 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">30 días</p>
                <p className="text-sm">Devolución</p>
              </div>
              <div className="w-px h-8 bg-white bg-opacity-20"></div>
              <div className="text-center">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm">Soporte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
