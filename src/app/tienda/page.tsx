import { Suspense } from 'react';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tienda</h1>
          <p className="text-lg text-slate-600">
            Explora nuestro catálogo completo de productos dermatológicos
          </p>
        </div>

        {/* Filters & Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Filtros</h2>
              
              {/* Filter by Problem */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">Por Problema</h3>
                <ul className="space-y-2 text-sm">
                  {['Acné', 'Manchas', 'Piel Sensible', 'Resequedad', 'Envejecimiento'].map((item) => (
                    <li key={item}>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-slate-600">{item}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filter by Type */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">Por Tipo</h3>
                <ul className="space-y-2 text-sm">
                  {['Limpiadores', 'Cremas', 'Sérums', 'Protectores', 'Tratamientos'].map((item) => (
                    <li key={item}>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-slate-600">{item}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filter by Brand */}
              <div className="mb-6">
                <h3 className="font-semibold text-slate-800 mb-3">Por Marca</h3>
                <ul className="space-y-2 text-sm">
                  {['A-DERMA', 'AVÈNE', 'ISDIN', 'Otras'].map((item) => (
                    <li key={item}>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-slate-600">{item}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <span className="text-slate-400">Producto {i}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Producto Destacado {i}
                    </h3>
                    <p className="text-lg font-bold text-slate-900 mb-3">$450</p>
                    <button className="w-full bg-primary-500 text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                      Agregar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
