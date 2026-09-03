import { NextRequest, NextResponse } from 'next/server';

// Requerido por Cloudflare Pages (@cloudflare/next-on-pages) para toda ruta
// dinámica; sin esto el build falla y el deploy nunca llega a producción.
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aquí iría integración real de email (SendGrid, Nodemailer, etc.)
    // Por ahora, simular éxito
    console.log('Contacto recibido:', { name, email, subject, message });

    return NextResponse.json(
      { message: 'Tu mensaje ha sido enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
}
