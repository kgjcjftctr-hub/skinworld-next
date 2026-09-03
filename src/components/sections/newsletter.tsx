'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('bad response');
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-section-lg bg-primary-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-8 h-8 text-primary-500 mx-auto mb-6" />
        <h2 className="mb-4">Novedades sobre cuidado de piel</h2>
        <p className="mx-auto mb-8">
          Avisos de nuevos productos y contenido dermatológico -- sin spam.
        </p>

        {status === 'done' ? (
          <div className="inline-flex items-center gap-2 text-primary-700 font-medium">
            <Check className="w-5 h-5" />
            Listo, te avisaremos.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 !rounded-full"
            />
            <button type="submit" disabled={status === 'loading'} className="btn btn-ink shrink-0">
              {status === 'loading' ? 'Enviando…' : 'Suscribirme'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 mt-3">
            No se pudo enviar. Intenta de nuevo en un momento.
          </p>
        )}
      </div>
    </section>
  );
}
