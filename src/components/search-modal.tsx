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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 shadow-xl">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar productos, marcas, categorías..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 border-b border-slate-200 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto">
          {loading && (
            <div className="p-4 text-center text-slate-500">Buscando...</div>
          )}

          {!loading && query.length >= 2 && (
            <>
              {results.products.length > 0 && (
                <div className="px-4 py-3 border-b border-slate-200">
                  <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Productos</p>
                  <div className="space-y-2">
                    {results.products.map((product: any) => (
                      <Link key={product.id} href={`/producto/${product.slug}`}>
                        <div
                          onClick={onClose}
                          className="p-2 rounded hover:bg-slate-100 cursor-pointer"
                        >
                          <p className="font-medium text-slate-900">{product.name}</p>
                          <p className="text-sm text-slate-600">${product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.brands.length > 0 && (
                <div className="px-4 py-3 border-b border-slate-200">
                  <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Marcas</p>
                  <div className="flex flex-wrap gap-2">
                    {results.brands.map((brand: string) => (
                      <Link key={brand} href={`/tienda?marca=${encodeURIComponent(brand)}`}>
                        <span
                          onClick={onClose}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm cursor-pointer hover:bg-primary-200"
                        >
                          {brand}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.categories.length > 0 && (
                <div className="px-4 py-3">
                  <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Categorías</p>
                  <div className="flex flex-wrap gap-2">
                    {results.categories.map((category: string) => (
                      <Link key={category} href={`/tienda?categoria=${encodeURIComponent(category)}`}>
                        <span
                          onClick={onClose}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm cursor-pointer hover:bg-slate-200"
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
                  <div className="p-4 text-center text-slate-500">
                    No se encontraron resultados para "{query}"
                  </div>
                )}
            </>
          )}

          {!loading && query.length < 2 && query.length > 0 && (
            <div className="p-4 text-center text-slate-500 text-sm">
              Escribe al menos 2 caracteres para buscar
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
