import { CheckCircle2, Award, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Sobre Skin World</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Respaldados por expertise dermatológico profesional
            </p>
          </div>
        </div>
      </section>

      {/* Dermatologist Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Foto real de la Dra. Karina Alfaro (reemplaza el placeholder anterior) */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <picture>
                  <source srcSet="/images/team/dra-karina-alfaro.webp" type="image/webp" />
                  <img
                    src="/images/team/dra-karina-alfaro.jpg"
                    alt="Dra. Karina Alfaro, dermatóloga"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="mb-2 inline-block">
                <span className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Fundadora y Experta</span>
                </span>
              </div>

              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                Dra. Karina Alfaro López
              </h2>
              
              <p className="text-lg text-primary-600 font-semibold mb-6">
                Especialista en Dermatología
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">25 años de experiencia</p>
                    <p className="text-slate-600">Trayectoria profesional comprobada en dermatología</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Formación Profesional</p>
                    <ul className="text-slate-600 space-y-1 text-sm mt-1">
                      <li>Medicina General - UNAM</li>
                      <li>Medicina Interna - Hospital ABC</li>
                      <li>Dermatología - Centro Médico Nacional 20 de Noviembre ISSSTE</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Certificaciones Vigentes</p>
                    <ul className="text-slate-600 space-y-1 text-sm mt-1">
                      <li>Certificada por el Consejo Mexicano de Dermatología (vigencia hasta 2030)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Memberships */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Membresías Profesionales</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Miembro Activo de la Academia Mexicana de Dermatología</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Miembro Activo de la Sociedad Mexicana de Dermatoscopia</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Miembro Activo del Colegio Iberoamericano de Dermatología</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <Heart className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestra Misión</h3>
              <p className="text-slate-600">
                Proporcionar productos dermatológicos de calidad respaldados por expertos, para el cuidado profesional de tu piel.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <Award className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestros Valores</h3>
              <p className="text-slate-600">
                Calidad, profesionalismo, confianza y compromiso con la salud dermatológica de nuestros clientes.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <Users className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestro Compromiso</h3>
              <p className="text-slate-600">
                Ofrecer soluciones dermatológicas efectivas con el respaldo de profesionales certificados y acreditados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Por Qué Elegir Skin World</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <CheckCircle2 className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Respaldo Profesional</h3>
                <p className="text-slate-600 mt-2">
                  Cada producto está seleccionado y respaldado por dermatóloga certificada con 25 años de experiencia.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <CheckCircle2 className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Calidad Garantizada</h3>
                <p className="text-slate-600 mt-2">
                  Ofrecemos marcas reconocidas y productos de calidad dermatológica comprobada.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <CheckCircle2 className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Asesoramiento Experto</h3>
                <p className="text-slate-600 mt-2">
                  Acceso a recomendaciones profesionales para el cuidado personalizado de tu piel.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <CheckCircle2 className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Confianza</h3>
                <p className="text-slate-600 mt-2">
                  Confía en el expertise dermatológico profesional respaldado por membresías en asociaciones de salud reconocidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Comienza tu Rutina Dermatológica
          </h2>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Descubre los productos recomendados por profesionales para el cuidado de tu piel.
          </p>
          <a
            href="/tienda"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all"
          >
            <span>Explorar Tienda</span>
          </a>
        </div>
      </section>
    </div>
  );
}
