'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface FiltersProps {
  selectedCategories?: string[];
}

export function Filters({ selectedCategories = [] }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const problems = ['Acné', 'Manchas', 'Piel Sensible', 'Resequedad', 'Envejecimiento'];
  const types = ['Limpiadores', 'Cremas', 'Sérums', 'Protectores', 'Tratamientos'];
  const brands = ['A-DERMA', 'AVÈNE', 'ISDIN', 'Otras'];

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    const current = selectedCategories || [];
    
    if (current.includes(category)) {
      const updated = current.filter((c) => c !== category);
      if (updated.length > 0) {
        params.set('categoria', updated.join(','));
      } else {
        params.delete('categoria');
      }
    } else {
      params.set('categoria', [...current, category].join(','));
    }
    
    router.push(`/tienda?${params.toString()}`);
  };

  const handleClearFilters = () => {
    router.push('/tienda');
  };

  return (
    <div className="space-y-6">
      {/* Por Problema */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Por Problema</h3>
        <ul className="space-y-3">
          {problems.map((item) => (
            <li key={item}>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes(item)}
                  onChange={() => handleCategoryChange(item)}
                  className="w-4 h-4 rounded border-primary-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-slate-700 group-hover:text-primary-600 transition-colors">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Por Tipo */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Por Tipo</h3>
        <ul className="space-y-3">
          {types.map((item) => (
            <li key={item}>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes(item)}
                  onChange={() => handleCategoryChange(item)}
                  className="w-4 h-4 rounded border-primary-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-slate-700 group-hover:text-primary-600 transition-colors">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Por Marca */}
      <div>
        <h3 className="font-bold text-slate-900 mb-4">Por Marca</h3>
        <ul className="space-y-3">
          {brands.map((item) => (
            <li key={item}>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes(item)}
                  onChange={() => handleCategoryChange(item)}
                  className="w-4 h-4 rounded border-primary-300 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-slate-700 group-hover:text-primary-600 transition-colors">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Clear Button */}
      <button
        onClick={handleClearFilters}
        className="w-full py-2 px-4 border-2 border-primary-300 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
      >
        Limpiar Filtros
      </button>
    </div>
  );
}
