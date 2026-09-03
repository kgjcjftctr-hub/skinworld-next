import Link from 'next/link';
import { User } from 'lucide-react';

export const metadata = {
  title: 'Mi Cuenta | Skin World',
};

/**
 * Placeholder — todavía no existe backend de autenticación/cuentas.
 * Se deja como página real (no un 404) para que el ícono de cuenta del
 * header tenga destino, sin inventar un flujo de login que no funciona.
 * Cuando se defina el sistema de cuentas, esta página se reemplaza por el
 * login/registro/perfil real.
 */
export default function AccountPage() {
  return (
    <div className="max-w-lg mx-auto px-4 sm:px-6 py-section text-center">
      <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
        <User className="w-7 h-7 text-primary-500" />
      </div>
      <h1 className="text-4xl mb-3">Mi Cuenta</h1>
      <p className="mx-auto">
        Muy pronto podrás crear una cuenta para guardar tus direcciones, dar
        seguimiento a tus pedidos y agilizar tu compra. Por ahora, puedes
        seguir comprando sin necesidad de una cuenta.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link href="/tienda" className="btn btn-primary">
          Ir a la tienda
        </Link>
        <Link href="/contacto" className="btn btn-secondary">
          Contactar a Skin World
        </Link>
      </div>
    </div>
  );
}
