'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Rutina diaria para piel con acné',
    excerpt: 'Descubre los pasos esenciales para cuidar tu piel propensa al acné.',
    category: 'Skincare',
    date: '5 sep 2026',
  },
  {
    id: 2,
    title: 'Protección solar: más que un hábito',
    excerpt: 'Por qué el protector solar es el mejor inversión en tu salud dermatológica.',
    category: 'Protección',
    date: '3 sep 2026',
  },
  {
    id: 3,
    title: 'Ingredientes activos que funcionan',
    excerpt: 'Guía completa de los ingredientes más efectivos en skincare profesional.',
    category: 'Educación',
    date: '1 sep 2026',
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Blog Educativo
            </h2>
            <p className="text-xl text-slate-600">
              Artículos y recursos escritos por profesionales dermatológicos. Aprende sobre cuidado de piel.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
          >
            <span>Ver todo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group cursor-pointer">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 h-40 flex items-center justify-center group-hover:from-primary-200 transition-colors">
                <span className="text-slate-400">Imagen del artículo</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-primary-600 uppercase mb-3">
                  {post.category}
                </p>
                <h3 className="font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="text-xs text-slate-500">{post.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
          >
            <span>Ver todos los artículos</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
