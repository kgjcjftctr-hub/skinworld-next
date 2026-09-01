import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
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
              <span className="font-semibold">Skin World</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Productos dermatológicos profesionales respaldados por expertos en salud de la piel.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold mb-4">Tienda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tienda" className="text-slate-400 hover:text-white transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/tienda?cat=acne" className="text-slate-400 hover:text-white transition-colors">
                  Acné
                </Link>
              </li>
              <li>
                <Link href="/tienda?cat=manchas" className="text-slate-400 hover:text-white transition-colors">
                  Manchas
                </Link>
              </li>
              <li>
                <Link href="/tienda?cat=envejecimiento" className="text-slate-400 hover:text-white transition-colors">
                  Envejecimiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-slate-400 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-slate-400 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@skinworld.mx" className="text-slate-400 hover:text-white transition-colors">
                  hola@skinworld.mx
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5591047107" className="text-slate-400 hover:text-white transition-colors">
                  55 9104 7107
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-slate-400">
                  CDMX, México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Skin World. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/terminos" className="text-slate-400 hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="/privacidad" className="text-slate-400 hover:text-white transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
