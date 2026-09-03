'use client';

import Link from 'next/link';
import { formatPrice } from '@/utils';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/store/cart';

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
    rating: 4.8,
    reviews: 124,
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
    rating: 4.9,
    reviews: 89,
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
    rating: 4.7,
    reviews: 156,
  },
  {
    id: '4',
    name: 'Crema Reparadora',
    slug: 'crema-reparadora',
    price: 780,
    image: '/placeholder-product.jpg',
    brand: 'A-DERMA',
    category: 'Cremas',
    rating: 4.9,
    reviews: 201,
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
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Productos Destacados
          </h2>
          <p className="text-xl text-slate-600">
            Selección de nuestros productos más populares, efectivos y recomendados por profesionales dermatológicos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/producto/${product.slug}`}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                {/* Image */}
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 aspect-square overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-slate-400 text-center px-4">Imagen del producto</span>
                  </div>
                  {product.compareAtPrice && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% off
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-3">
                    {product.brand}
                  </p>
                  <h3 className="font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 text-sm">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.round(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-600">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="mb-4 mt-auto">
                    {product.compareAtPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-slate-900">
                          {formatPrice(product.priceWithIVA || Math.round(product.price * 1.16))}
                        </span>
                        <span className="text-sm text-slate-400 line-through">
                          {formatPrice(product.compareAtPriceWithIVA || Math.round(product.compareAtPrice * 1.16))}
                        </span>
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-slate-900">
                        {formatPrice(product.priceWithIVA || Math.round(product.price * 1.16))}
                      </span>
                    )}
                    <p className="text-xs text-slate-500 mt-1">Con IVA</p>
                  </div>

                  {/* Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-primary-500 text-white py-2.5 rounded-lg font-semibold hover:bg-primary-600 transition-colors group/btn"
                  >
                    <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/tienda"
            className="inline-flex items-center space-x-2 border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all"
          >
            <span>Ver todos los productos</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Import ArrowRight
import { ArrowRight } from 'lucide-react';
