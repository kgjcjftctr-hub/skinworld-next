'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-section bg-ink-900 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-6">Empieza con tu piel hoy</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto">
          Explora el catálogo completo, seleccionado con criterio dermatológico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tienda" className="btn btn-primary">
            Explorar tienda
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/contacto"
            className="btn bg-transparent border border-white/30 text-white hover:bg-white/10"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
