'use client';

import { formatPrice } from '@/utils';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/store/cart';
import { useState, useEffect } from 'react';
import productsData from '@/public/products-data.json';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const addItem = useCart((state) => state.addItem);

  useEffect(() => {
    const foundProduct = (productsData as any[]).find((p) => p.slug === params.slug);
    if (foundProduct) {
      setProduct(foundProduct);
      const related = (productsData as any[])
        .filter((p) => p.category === foundProduct.category && p.slug !== params.slug)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [params.slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/tienda" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la tienda</span>
          </Link>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Cargando...</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, 1);
    alert('¡Producto agregado al carrito!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link href="/tienda" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la tienda</span>
        </Link>

        {/* Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="bg-slate-100 rounded-lg aspect-square overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as any).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3C/svg%3E';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                Sin imagen disponible
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            {product.brand && (
              <p className="text-sm font-semibold text-primary-600 uppercase mb-4">
                {product.brand}
              </p>
            )}
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {product.name}
            </h1>
            {product.category && (
              <p className="text-slate-600 mb-6">{product.category}</p>
            )}

            {/* Price */}
            <div className="mb-8">
              {product.compareAtPrice ? (
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-slate-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xl text-slate-400 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <span className="text-sm font-semibold text-red-600">
                    {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-4xl font-bold text-slate-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="prose prose-sm mb-8">
                <p className="text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors mb-4"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Agregar al carrito</span>
            </button>

            {/* SKU */}
            {product.sku && (
              <p className="text-sm text-slate-500">
                SKU: <span className="font-mono">{product.sku}</span>
              </p>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Productos relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct: any) => (
                <Link key={relProduct.id} href={`/producto/${relProduct.slug}`}>
                  <div className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer">
                    <div className="bg-slate-100 aspect-square overflow-hidden">
                      {relProduct.image ? (
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            (e.currentTarget as any).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          Sin imagen
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      {relProduct.brand && (
                        <p className="text-xs font-semibold text-primary-600 uppercase mb-2">
                          {relProduct.brand}
                        </p>
                      )}
                      <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 text-sm">
                        {relProduct.name}
                      </h3>
                      <p className="text-lg font-bold text-slate-900">
                        {formatPrice(relProduct.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
