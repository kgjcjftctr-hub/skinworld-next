'use client';

import Link from 'next/link';
import { useCart } from '@/store/cart';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = useCart((state) => state.getTotalItems());

  const navigationLinks = [
    { href: '/tienda', label: 'Tienda' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <g id="leaf">
                  <path d="M 50 30 Q 48 45 50 70" stroke="#d4a5af" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <ellipse cx="35" cy="40" rx="12" ry="18" fill="#d4a5af" transform="rotate(-45 35 40)"/>
                  <ellipse cx="65" cy="40" rx="12" ry="18" fill="#d4a5af" transform="rotate(45 65 40)"/>
                  <ellipse cx="32" cy="55" rx="12" ry="18" fill="#d4a5af" transform="rotate(-35 32 55)"/>
                  <ellipse cx="68" cy="55" rx="12" ry="18" fill="#d4a5af" transform="rotate(35 68 55)"/>
                </g>
              </svg>
            </div>
            <span className="font-semibold text-slate-900 hidden sm:inline">
              Skin World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-primary-500 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline-flex p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-slate-700" />
            </button>

            <Link
              href="/carrito"
              className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
