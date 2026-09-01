'use client';

import Link from 'next/link';
import { formatPrice } from '@/utils';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/store/cart';

// Datos de ejemplo - será reemplazado con datos de BD
const featuredProducts = [
  {
    id: '1',
    name: 'Limpiador Facial Suave',
    slug: 'limpiador-facial-suave',
    price: 450,
    compareAtPrice: 550,
    image: '/placeholder-product.jpg',
    brand: 'A-DERMA',
    category: 'Limpiadores',
  },
  {
    id: '2',
    name: 'Sérum Hidratante Intenso',
    slug: 'serum-hidratante-intenso',
    price: 680,
    compareAtPrice: 850,
    image: '/placeholder-product.jpg',
    brand: 'AVÈNE',
    category: 'Sérums',
  },
  {
    id: '3',
    name: 'Protector Solar SPF 50',
    slug: 'protector-solar-spf-50',
    price: 520,
    compareAtPrice: 650,
    image: '/placeholder-product.jpg',
    brand: 'ISDIN',
    category: 'Protección Solar',
  },
  {
    id: '4',
    name: 'Crema Reparadora',
    slug: 'crema-reparadora',
    price: 780,
    image: '/placeholder-product.jpg',
    brand: 'A-DERMA',
    category: 'Cremas',
  },
];

export function FeaturedProducts() {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem(
      {
        ...product,
        description: '',
        shortDescription: '',
        inStock: 10,
        featured: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      1
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Productos Destacados
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Selección de nuestros productos más populares y efectivos
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative bg-slate-100 aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-slate-400">Imagen del producto</span>
                </div>
                {product.compareAtPrice && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Oferta
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
                  {product.brand}
                </p>
                <Link href={`/producto/${product.slug}`}>
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="mb-4">
                  {product.compareAtPrice ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-slate-900">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        {formatPrice(product.compareAtPrice)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-lg font-bold text-slate-900">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>

                {/* Add to cart button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Agregar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/tienda"
            className="inline-flex items-center space-x-2 border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200"
          >
            <span>Ver todos los productos</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
