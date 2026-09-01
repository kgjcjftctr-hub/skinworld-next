export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
        <p className="text-slate-600 mb-8">Artículos y recursos sobre cuidado dermatológico.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article key={i} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 h-48"></div>
              <div className="p-6">
                <p className="text-sm text-primary-600 font-semibold mb-2">Skincare</p>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Artículo {i}</h2>
                <p className="text-slate-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">Leer más</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
