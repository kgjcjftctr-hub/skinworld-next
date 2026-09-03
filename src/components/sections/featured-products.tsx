'use client';

import Link from 'next/link';
import { formatPrice } from '@/utils';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/store/cart';
import { getFeaturedProducts, parseImages, type Product } from '@/lib/catalog';

const FALLBACK_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f7f5f4" width="400" height="400"/%3E%3C/svg%3E';

function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((state) => state.addItem);
  const images = parseImages(product);
  const secondaryImage = images.find((img) => img !== product.image);
  const hasDiscount = Boolean(product.compareAtPrice && product.compareAtPrice > product.price);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(
      {
        ...product,
        description: product.description ?? '',
        shortDescription: product.shortDescription ?? '',
        inStock: product.inStock ?? 10,
        featured: false,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      } as any,
      1
    );
  };

  return (
    <Link href={`/producto/${product.slug}`} className="group flex flex-col h-full">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-ink-50 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            secondaryImage ? 'group-hover:opacity-0' : ''
          }`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE;
          }}
        />
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        )}

        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-ink-900 text-white px-2.5 py-1 rounded-full text-[11px] font-semibold">
            -{Math.round(
              ((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100
            )}%
          </div>
        )}

        <button
          onClick={handleAddToCart}
          aria-label="Agregar al carrito"
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-soft-lg flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-ink-900 hover:text-white"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        {product.brand && (
          <p className="text-[11px] font-semibold text-primary-600 uppercase tracking-wider mb-1">
            {product.brand}
          </p>
        )}
        <h3 className="text-sm font-medium text-ink-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-sm font-semibold text-ink-900">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-xs text-ink-300 line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section className="py-section bg-paper-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-3">
              Del catálogo real
            </p>
            <h2>Productos destacados</h2>
          </div>
          <Link
            href="/tienda"
            className="text-sm font-medium text-ink-700 hover:text-primary-600 transition-colors shrink-0"
          >
            Ver todo el catálogo →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
