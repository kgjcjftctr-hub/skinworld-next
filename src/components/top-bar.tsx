'use client';

import { useEffect, useState } from 'react';
import { Truck } from 'lucide-react';

/**
 * Barra superior de información/promociones. Mensajes editables aquí mismo
 * (un array simple) — cuando exista un sistema de contenido administrable
 * (ver plan de "Administración"), esto se mueve a un JSON/CMS sin tocar el
 * componente. Rota automáticamente si hay más de un mensaje.
 */
const MESSAGES = [
  'Envío gratis en CDMX. Resto de la república desde $199.',
  'Productos seleccionados y respaldados por dermatóloga certificada.',
];

export function TopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (MESSAGES.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-ink-900 text-paper-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center">
        <div className="flex items-center gap-2 text-xs font-medium tracking-wide overflow-hidden">
          <Truck className="w-3.5 h-3.5 shrink-0 text-primary-300" aria-hidden="true" />
          <span key={index} className="animate-fade-in truncate">
            {MESSAGES[index]}
          </span>
        </div>
      </div>
    </div>
  );
}
