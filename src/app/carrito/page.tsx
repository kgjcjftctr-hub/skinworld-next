'use client';

import Link from 'next/link';
import { useCart } from '@/store/cart';
import { formatPrice } from '@/utils';
import { Trash2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const items = useCart((state) => state.items);
  const removeItem = useCart((state) => state.removeItem);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const getTotalPrice = useCart((state) => state.getTotalPrice());

  const subtotal = getTotalPrice;
  const tax = subtotal * 0.16; // IVA 16%
  const shipping = subtotal > 500 ? 0 : 100;
  const total = subtotal + tax + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Aún no has agregado productos al carrito
            </p>
            <Link
              href="/tienda"
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Ir a la tienda</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/tienda"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continuar comprando</span>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Mi Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border-b border-slate-200 last:border-b-0 flex gap-6"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400">IMG</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Link
                      href={`/producto/${item.slug}`}
                      className="text-lg font-semibold text-slate-900 hover:text-primary-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-slate-600 mt-1">{item.brand}</p>
                    <p className="text-lg font-bold text-slate-900 mt-2">
                      {formatPrice((item as any).priceWithIVA || (item.price as any) * 1.16)}
                    </p>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col items-end space-y-4">
                    <div className="flex items-center border border-slate-200 rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.cartQuantity - 1)
                        }
                        className="px-3 py-1 hover:bg-slate-100 transition-colors"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 border-l border-r border-slate-200">
                        {item.cartQuantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.cartQuantity + 1)
                        }
                        className="px-3 py-1 hover:bg-slate-100 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center space-x-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Eliminar</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-20">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">IVA (16%)</span>
                  <span className="font-semibold">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Envío</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-accent-600">Gratis</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary-600">
                  {formatPrice(total)}
                </span>
              </div>

              <Link
                href="/checkout"
                className="w-full inline-flex items-center justify-center space-x-2 bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all mb-3"
              >
                <span>Proceder al Pago</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="text-xs text-slate-600 text-center">
                Envío gratis en compras mayores a $500
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
