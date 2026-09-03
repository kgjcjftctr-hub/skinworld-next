'use client';

import { useState, useMemo } from 'react';
import { formatPrice } from '@/utils';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Filters } from '@/components/filters';
import productsData from '@/public/products-data.json';
import { useCart } from '@/store/cart';

export default function ShopPage({ searchParams }: { searchParams: any }) {
  const addItem = useCart((state) => state.addItem);
  const categoryString = searchParams?.categoria;
  const selectedCategories = categoryString ? categoryString.split(',').filter(Boolean) : [];

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let products = productsData as any[];
    
    if (selectedCategories.length > 0) {
      products = products.filter((p) =>
        selectedCategories.some((cat: string) =>
          p.category && p.category.toLowerCase() === cat.toLowerCase()
        )
      );
    }

    return products;
  }, [selectedCategories]);

  const handleAddToCart = (product: any) => {
    addItem(product, 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tienda</h1>
          <p className="text-lg text-slate-600">
            Explora nuestro catálogo completo de productos dermatológicos ({filteredProducts.length} productos)
          </p>
        </div>

        {/* Filters & Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-500 to-primary-400 px-6 py-4">
                  <h2 className="text-lg font-bold text-white">Filtrar</h2>
                </div>
                <div className="p-6">
                  <Filters selectedCategories={selectedCategories} />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No hay productos en esta categoría</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product: any) => (
                  <div key={product.id}>
                    <Link href={`/producto/${product.slug}`}>
                      <div className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                        {/* Image */}
                        <div className="relative bg-slate-100 aspect-square overflow-hidden">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              onError={(e) => {
                                (e.currentTarget as any).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3C/svg%3E';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                              Imagen no disponible
                            </div>
                          )}
                          {product.compareAtPrice && (
                            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                              {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% OFF
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-4 flex-1 flex flex-col">
                          {product.brand && (
                            <p className="text-xs font-semibold text-primary-600 uppercase mb-2">
                              {product.brand}
                            </p>
                          )}
                          <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary-600 line-clamp-2 text-sm">
                            {product.name}
                          </h3>

                          {product.category && (
                            <p className="text-xs text-slate-500 mb-3">{product.category}</p>
                          )}

                          {/* Price */}
                          <div className="mb-4 mt-auto">
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
                        </div>
                      </div>
                    </Link>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="w-full mt-2 flex items-center justify-center space-x-2 bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Agregar</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
