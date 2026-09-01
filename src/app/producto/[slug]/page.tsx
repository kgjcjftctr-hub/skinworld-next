import Database from 'better-sqlite3';
import { formatPrice } from '@/utils';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

function getProduct(slug: string) {
  try {
    const db = new Database('data/skinworld.db');
    const product = db.prepare('SELECT * FROM products WHERE slug = ?').get(slug);
    db.close();
    return product;
  } catch (error) {
    console.error('Error reading product:', error);
    return null;
  }
}

function getRelatedProducts(category: string, currentSlug: string) {
  try {
    const db = new Database('data/skinworld.db');
    const products = db.prepare(
      'SELECT * FROM products WHERE category = ? AND slug != ? LIMIT 4'
    ).all(category, currentSlug);
    db.close();
    return products;
  } catch (error) {
    console.error('Error reading related products:', error);
    return [];
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  const relatedProducts = product ? getRelatedProducts(product.category, params.slug) : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/tienda" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la tienda</span>
          </Link>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Producto no encontrado</h1>
            <p className="text-slate-600 mb-8">Lo sentimos, el producto que buscas no existe.</p>
            <Link href="/tienda" className="inline-block bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600">
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = product.images ? JSON.parse(product.images) : [];
  const primaryImage = product.image || images[0];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/tienda" className="inline-flex items-center space-x-2 text-slate-600 hover:text-primary-600 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la tienda</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-slate-100 rounded-lg overflow-hidden mb-4">
              {primaryImage ? (
                <img
                  src={primaryImage}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="16" font-family="sans-serif"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                  }}
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center text-slate-400">
                  Sin imagen
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.slice(0, 4).map((img: string, idx: number) => (
                  <div key={idx} className="bg-slate-100 rounded overflow-hidden">
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-20 object-cover cursor-pointer hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {product.brand && (
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2">
                {product.brand}
              </p>
            )}
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>

            {product.category && (
              <p className="text-slate-600 mb-6">{product.category}</p>
            )}

            <div className="mb-8">
              {product.compareAtPrice ? (
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-slate-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-lg text-slate-400 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <span className="text-red-600 font-semibold">
                    {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}% descuento
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-slate-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-4">
                <input type="number" min="1" defaultValue="1" className="w-20 px-3 py-2 border border-slate-300 rounded-lg" />
                <button
                  type="button"
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Agregar al carrito</span>
                </button>
              </div>
              <p className="text-sm text-slate-600">
                {product.inStock ? 'En stock' : 'Agotado'}
              </p>
            </div>

            {product.description && (
              <div className="border-t border-slate-200 pt-6">
                <h2 className="font-semibold text-slate-900 mb-3">Descripción</h2>
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
              </div>
            )}

            {product.sku && (
              <div className="mt-6 text-sm text-slate-600">
                <span className="font-semibold">SKU:</span> {product.sku}
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related: any) => (
                <Link key={related.id} href={`/producto/${related.slug}`}>
                  <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition cursor-pointer">
                    <div className="bg-slate-100 aspect-square overflow-hidden">
                      {related.image ? (
                        <img
                          src={related.image}
                          alt={related.name}
                          className="w-full h-full object-cover hover:scale-105 transition"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          Sin imagen
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{related.name}</h3>
                      <p className="text-lg font-bold text-slate-900">{formatPrice(related.price)}</p>
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
