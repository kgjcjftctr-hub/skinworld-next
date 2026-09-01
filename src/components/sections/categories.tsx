import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'acne',
    name: 'Acné',
    slug: 'acne',
    description: 'Soluciones efectivas para el acné',
    icon: '🎯',
  },
  {
    id: 'manchas',
    name: 'Manchas',
    slug: 'manchas',
    description: 'Tratamientos para manchas oscuras',
    icon: '✨',
  },
  {
    id: 'piel-sensible',
    name: 'Piel Sensible',
    slug: 'piel-sensible',
    description: 'Productos para piel delicada',
    icon: '🛡️',
  },
  {
    id: 'envejecimiento',
    name: 'Envejecimiento',
    slug: 'envejecimiento',
    description: 'Anti-edad y revitalización',
    icon: '💎',
  },
  {
    id: 'hidratacion',
    name: 'Hidratación',
    slug: 'hidratacion',
    description: 'Nutrición e hidratación profunda',
    icon: '💧',
  },
  {
    id: 'proteccion-solar',
    name: 'Protección Solar',
    slug: 'proteccion-solar',
    description: 'Protectores solares profesionales',
    icon: '☀️',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Encuentra lo que Necesitas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Navega por categorías según tu tipo de piel y necesidades
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/tienda?categoria=${category.slug}`}
              className="group bg-white rounded-lg p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{category.icon}</div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Otras Categorías
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Cabello',
              'Uñas',
              'Resequedad',
              'Dermatitis',
              'Limpiadores',
              'Cremas',
              'Sérums',
              'Tratamientos',
              'Shampoos',
              'Otros',
            ].map((cat) => (
              <Link
                key={cat}
                href={`/tienda?categoria=${cat.toLowerCase()}`}
                className="text-slate-600 hover:text-primary-500 font-medium text-sm transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
