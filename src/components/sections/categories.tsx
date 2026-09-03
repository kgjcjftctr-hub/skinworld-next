'use client';

import Link from 'next/link';
import { Target, Sparkles, ShieldCheck, Droplet, Gem, Droplets } from 'lucide-react';

// Íconos de lucide-react en vez de emojis, para cumplir con la guía de
// diseño del sitio ("sin emojis") manteniendo un ícono distinto por categoría.
const categories = [
  { name: 'Acné', slug: 'acne', color: 'from-red-100 to-red-50', Icon: Target },
  { name: 'Manchas', slug: 'manchas', color: 'from-yellow-100 to-yellow-50', Icon: Sparkles },
  { name: 'Piel Sensible', slug: 'piel-sensible', color: 'from-pink-100 to-pink-50', Icon: ShieldCheck },
  { name: 'Resequedad', slug: 'resequedad', color: 'from-blue-100 to-blue-50', Icon: Droplet },
  { name: 'Envejecimiento', slug: 'envejecimiento', color: 'from-purple-100 to-purple-50', Icon: Gem },
  { name: 'Hidratación', slug: 'hidratacion', color: 'from-teal-100 to-teal-50', Icon: Droplets },
];

export function CategoriesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Encuentra soluciones por problema
          </h2>
          <p className="text-xl text-slate-600">
            Navega por nuestro catálogo categorizado. Todos nuestros productos están avalados por profesionales dermatológicos.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/tienda?categoria=${encodeURIComponent(category.name)}`}>
              <div className={`group bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center hover:shadow-lg transition-all cursor-pointer border border-slate-100 h-full flex flex-col items-center justify-center`}>
                <category.Icon className="w-8 h-8 mb-3 text-primary-600" />
                <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors text-sm">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
