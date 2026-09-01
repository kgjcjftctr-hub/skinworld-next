import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contacta con Nosotros</h1>
          <p className="text-lg text-slate-600">
            Estamos aquí para ayudarte con cualquier pregunta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a
                      href="mailto:hola@skinworld.mx"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      hola@skinworld.mx
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Teléfono</h3>
                    <a
                      href="tel:+5591047107"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      55 9104 7107
                    </a>
                    <p className="text-sm text-slate-600 mt-1">
                      Lunes a Viernes, 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Ubicación</h3>
                    <p className="text-slate-600">
                      Ciudad de México, México
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Envíanos un Mensaje
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
