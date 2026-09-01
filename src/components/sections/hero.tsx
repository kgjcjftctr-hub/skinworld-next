'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-slate-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                Dermatología Profesional
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Cuidado de piel con <span className="text-primary-500">respaldo dermatológico</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Productos premium seleccionados por profesionales. Cada fórmula está diseñada para transformar tu piel con ciencia y naturaleza.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tienda"
                className="inline-flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all transform hover:scale-105"
              >
                <span>Explorar Productos</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center space-x-2 border-2 border-slate-300 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all"
              >
                <span>Conocer a la Dra. Karina</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-slate-900">165+</p>
                <p className="text-sm text-slate-600">Productos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">25 años</p>
                <p className="text-sm text-slate-600">Experiencia</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">5k+</p>
                <p className="text-sm text-slate-600">Clientes</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl aspect-square overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-primary-600 text-6xl font-bold">
                Skincare
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
              <p className="text-sm font-semibold text-slate-600 mb-2">Ingredientes Activos</p>
              <p className="text-slate-900 font-bold">Fórmulas Premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
