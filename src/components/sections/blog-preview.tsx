import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { formatDate } from '@/utils';

const blogPosts = [
  {
    id: '1',
    title: 'Guía Completa para el Cuidado de la Piel con Acné',
    slug: 'guia-cuidado-piel-acne',
    excerpt: 'Conoce los pasos esenciales para tratar el acné de forma efectiva y segura.',
    date: '2024-01-15',
    author: 'Dermatóloga',
    category: 'Skincare',
  },
  {
    id: '2',
    title: '¿Cuándo Comenzar Rutina Anti-Edad?',
    slug: 'cuando-comenzar-rutina-anti-edad',
    excerpt: 'Descubre la edad ideal para iniciar tratamientos preventivos de envejecimiento.',
    date: '2024-01-10',
    author: 'Dermatóloga',
    category: 'Envejecimiento',
  },
  {
    id: '3',
    title: 'Protección Solar: Mito vs Realidad',
    slug: 'proteccion-solar-mito-realidad',
    excerpt: 'Desmitificamos los conceptos más comunes sobre el uso de protector solar.',
    date: '2024-01-05',
    author: 'Dermatóloga',
    category: 'Protección',
  },
];

export function BlogPreview() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Blog de Dermatología
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Tips, consejos y artículos de expertos sobre cuidado de la piel
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <span>Ver todo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-slate-50 rounded-lg overflow-hidden border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-primary-200 to-accent-200 aspect-video flex items-center justify-center text-4xl">
                
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide bg-primary-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  <span>Leer más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200"
          >
            <span>Ver todos los artículos</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
