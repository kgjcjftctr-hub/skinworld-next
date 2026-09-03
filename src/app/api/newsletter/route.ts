import { NextRequest, NextResponse } from 'next/server';

// Requerido por Cloudflare Pages (@cloudflare/next-on-pages) para toda ruta
// dinámica; sin esto el build falla y el deploy nunca llega a producción.
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    // Igual que /api/contact: todavía no hay integración real de email
    // marketing (Mailchimp, Klaviyo, etc.) conectada, así que por ahora solo
    // se registra la intención. Se conecta a un proveedor real cuando el
    // cliente decida cuál usar -- no se simula un "suscrito" falso más allá
    // de confirmar que la solicitud se recibió.
    console.log('Newsletter signup:', { email });

    return NextResponse.json({ message: 'Gracias, te avisaremos.' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}
