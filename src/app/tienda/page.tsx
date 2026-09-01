import Database from 'better-sqlite3';
import { formatPrice } from '@/utils';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Filters } from '@/components/filters';

// Función para obtener productos de la BD
function getProducts(categories?: string[]) {
  try {
    const db = new Database('data/skinworld.db');
    let query = 'SELECT * FROM products';
    let products;
    
    if (categories && categories.length > 0) {
      const placeholders = categories.map(() => '?').join(',');
      query = `SELECT * FROM products WHERE category IN (${placeholders})`;
      const stmt = db.prepare(query);
      products = stmt.all(...categories);
    } else {
      products = db.prepare('SELECT * FROM products').all();
    }
    
    db.close();
    return products;
  } catch (error) {
    console.error('Error reading products:', error);
    return [];
  }
}

export default function ShopPage({ searchParams }: { searchParams: any }) {
  const categoryString = searchParams?.categoria;
  const categories = categoryString ? categoryString.split(',') : [];
  const products = getProducts(categories.length > 0 ? categories : undefined);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tienda</h1>
          <p className="text-lg text-slate-600">
            Explora nuestro catálogo completo de productos dermatológicos ({products.length} productos disponibles)
          </p>
        </div>

        {/* Filters & Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filtros */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-500 to-primary-400 px-6 py-4">
                  <h2 className="text-lg font-bold text-white">Filtrar</h2>
                </div>
                <div className="p-6">
                  <Filters />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 text-lg">No hay productos disponibles</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product: any) => (
                  <Link key={product.id} href={`/producto/${product.slug}`}>
                    <div className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    {/* Image */}
                    <div className="relative bg-slate-100 aspect-square overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="16" font-family="sans-serif"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          Sin imagen
                        </div>
                      )}
                      {product.compareAtPrice && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          Oferta
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {product.brand && (
                        <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
                          {product.brand}
                        </p>
                      )}
                      <Link href={`/producto/${product.slug}`}>
                        <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 hover:underline">
                          {product.name}
                        </h3>
                      </Link>

                      {product.category && (
                        <p className="text-xs text-slate-500 mb-3">{product.category}</p>
                      )}

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
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors duration-200"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Ver detalles</span>
                      </button>
                    </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
