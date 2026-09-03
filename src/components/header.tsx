'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/store/cart';
import { ShoppingBag, Menu, X, Search, User, ChevronDown } from 'lucide-react';
import { SearchModal } from './search-modal';
import { TopBar } from './top-bar';

/**
 * Categorías reales (de public/products-data.json), ordenadas por número de
 * productos. Usan el mismo patrón `?categoria=` que ya consume `filters.tsx`
 * en /tienda, así que cada link del mega-menú devuelve resultados reales —
 * nada de categorías inventadas o vacías.
 */
const SHOP_CATEGORIES = [
  { label: 'Dermatitis', value: 'Dermatitis' },
  { label: 'Antiedad', value: 'Antiedad' },
  { label: 'Acné', value: 'Acné' },
  { label: 'Cabello y Uñas', value: 'Cabello y Uñas' },
  { label: 'Manchas', value: 'Manchas' },
  { label: 'Piel de Bebé', value: 'Piel de Bebé' },
];

const NAV_LINKS = [
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCart((state) => state.getTotalItems());

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquea el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <TopBar />

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ease-editorial ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-md shadow-soft border-b border-ink-100'
            : 'bg-paper border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-16' : 'h-20'
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g id="leaf">
                    <path d="M 50 30 Q 48 45 50 70" stroke="#d4a5af" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <ellipse cx="35" cy="40" rx="12" ry="18" fill="#d4a5af" transform="rotate(-45 35 40)" />
                    <ellipse cx="65" cy="40" rx="12" ry="18" fill="#d4a5af" transform="rotate(45 65 40)" />
                    <ellipse cx="32" cy="55" rx="12" ry="18" fill="#d4a5af" transform="rotate(-35 32 55)" />
                    <ellipse cx="68" cy="55" rx="12" ry="18" fill="#d4a5af" transform="rotate(35 68 55)" />
                  </g>
                </svg>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-serif text-xl text-ink-900 tracking-tight">Skin World</span>
                <span className="font-serif italic text-[11px] text-primary-600 -mt-0.5">
                  by Karina Alfaro
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <Link
                  href="/tienda"
                  className="inline-flex items-center gap-1 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors py-2"
                >
                  Tienda
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </Link>

                {/* Mega-menú de categorías reales */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-editorial">
                  <div className="bg-white rounded-2xl shadow-elevated border border-ink-100 p-6 w-[520px]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-300 mb-4">
                      Comprar por categoría
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                      {SHOP_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.value}
                          href={`/tienda?categoria=${encodeURIComponent(cat.value)}`}
                          className="block px-2 py-2 rounded-lg text-sm text-ink-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-ink-100">
                      <Link
                        href="/tienda"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700"
                      >
                        Ver todo el catálogo →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Buscar"
                className="p-2.5 hover:bg-ink-50 rounded-full transition-colors"
              >
                <Search className="w-[18px] h-[18px] text-ink-700" />
              </button>

              <Link
                href="/cuenta"
                aria-label="Mi cuenta"
                className="hidden sm:inline-flex p-2.5 hover:bg-ink-50 rounded-full transition-colors"
              >
                <User className="w-[18px] h-[18px] text-ink-700" />
              </Link>

              <Link
                href="/carrito"
                aria-label="Carrito"
                className="relative p-2.5 hover:bg-ink-50 rounded-full transition-colors"
              >
                <ShoppingBag className="w-[18px] h-[18px] text-ink-700" />
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 bg-primary-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Abrir menú"
                className="lg:hidden p-2.5 hover:bg-ink-50 rounded-full transition-colors ml-0.5"
              >
                <Menu className="w-5 h-5 text-ink-900" />
              </button>
            </div>
          </div>
        </div>

        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>

      {/* Menú móvil — panel a pantalla completa */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-paper shadow-elevated flex flex-col animate-fade-in-up">
            <div className="flex items-center justify-between h-20 px-6 border-b border-ink-100">
              <span className="font-serif text-lg text-ink-900">Menú</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
                className="p-2.5 hover:bg-ink-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-ink-900" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <Link
                href="/tienda"
                onClick={() => setIsMenuOpen(false)}
                className="block font-serif text-2xl text-ink-900 py-2"
              >
                Tienda
              </Link>

              <div className="mt-2 mb-6 pl-1 flex flex-wrap gap-2">
                {SHOP_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.value}
                    href={`/tienda?categoria=${encodeURIComponent(cat.value)}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-1.5 rounded-full bg-ink-50 text-ink-700 text-xs font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-ink-100 my-4" />

              <nav className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-2xl text-ink-900 py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/cuenta"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-2xl text-ink-900 py-2"
                >
                  Mi Cuenta
                </Link>
              </nav>
            </div>

            <div className="px-6 py-6 border-t border-ink-100">
              <Link
                href="/carrito"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-ink w-full"
              >
                Ver carrito {totalItems > 0 ? `(${totalItems})` : ''}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
