'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>({ products: [], brands: [], categories: [] });
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setLoading(true);
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
          const data = await res.json();
          setResults(data);
        } catch (error) {
          console.error('Search error:', error);
        }
        setLoading(false);
      } else {
        setResults({ products: [], brands: [], categories: [] });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ink-900/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-elevated border border-ink-100 overflow-hidden">
        <div className="relative">
          <Search className="absolute left-5 top-4.5 w-5 h-5 text-ink-300" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar productos, marcas, categorías..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-13 pr-12 py-4 border-0 border-b border-ink-100 rounded-none focus:outline-none focus:ring-0 text-base"
            style={{ paddingLeft: '3.25rem' }}
          />
          <button
            onClick={onClose}
            aria-label="Cerrar búsqueda"
            className="absolute right-4 top-3.5 p-1.5 text-ink-300 hover:text-ink-700 hover:bg-ink-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {loading && (
            <div className="p-6 text-center text-ink-300 text-sm">Buscando…</div>
          )}

          {!loading && query.length >= 2 && (
            <>
              {results.products.length > 0 && (
                <div className="px-5 py-4 border-b border-ink-100">
                  <p className="text-xs font-semibold text-ink-300 uppercase tracking-wider mb-2">Productos</p>
                  <div className="space-y-1">
                    {results.products.map((product: any) => (
                      <Link key={product.id} href={`/producto/${product.slug}`}>
                        <div
                          onClick={onClose}
                          className="p-2 rounded-lg hover:bg-primary-50 cursor-pointer transition-colors"
                        >
                          <p className="font-medium text-sm text-ink-900">{product.name}</p>
                          <p className="text-sm text-ink-500">${product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.brands.length > 0 && (
                <div className="px-5 py-4 border-b border-ink-100">
                  <p className="text-xs font-semibold text-ink-300 uppercase tracking-wider mb-2">Marcas</p>
                  <div className="flex flex-wrap gap-2">
                    {results.brands.map((brand: string) => (
                      <Link key={brand} href={`/tienda?marca=${encodeURIComponent(brand)}`}>
                        <span
                          onClick={onClose}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm cursor-pointer hover:bg-primary-100 transition-colors"
                        >
                          {brand}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.categories.length > 0 && (
                <div className="px-5 py-4">
                  <p className="text-xs font-semibold text-ink-300 uppercase tracking-wider mb-2">Categorías</p>
                  <div className="flex flex-wrap gap-2">
                    {results.categories.map((category: string) => (
                      <Link key={category} href={`/tienda?categoria=${encodeURIComponent(category)}`}>
                        <span
                          onClick={onClose}
                          className="px-3 py-1 bg-ink-50 text-ink-700 rounded-full text-sm cursor-pointer hover:bg-ink-100 transition-colors"
                        >
                          {category}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.products.length === 0 &&
                results.brands.length === 0 &&
                results.categories.length === 0 && (
                  <div className="p-6 text-center text-ink-500 text-sm">
                    No se encontraron resultados para "{query}"
                  </div>
                )}
            </>
          )}

          {!loading && query.length < 2 && query.length > 0 && (
            <div className="p-6 text-center text-ink-300 text-sm">
              Escribe al menos 2 caracteres para buscar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
