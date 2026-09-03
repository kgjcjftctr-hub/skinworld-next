import productsData from '@/public/products-data.json';

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  price: number;
  compareAtPrice: number | null;
  brand: string | null;
  sku: string;
  image: string;
  images: string; // JSON-encoded array de URLs
  category: string;
  problemType: string | null;
  productType: string | null;
  ingredients: string | null;
  instructions: string | null;
  presentation: string | null;
  inStock: number;
  featured: number;
  createdAt: string;
  updatedAt: string;
};

/**
 * `products-data.json` (165 productos) trae mezclados 4 registros de
 * ejemplo/semilla (`featured: 1`, sin `image`, con nombres genéricos como
 * "Limpiador Facial Suave" o "Sérum Hidratante Intenso") que NO son
 * productos reales del catálogo -- por eso el campo `featured` no se usa en
 * ningún lado del sitio para elegir qué mostrar. Un producto real siempre
 * trae una URL de imagen real (CDN de skinworld.mx); esa es la única señal
 * confiable para distinguirlos, así que se centraliza aquí en vez de
 * repetir el filtro en cada sección.
 */
export function getRealProducts(): Product[] {
  return (productsData as Product[]).filter(
    (p) => typeof p.image === 'string' && p.image.startsWith('http')
  );
}

/** Categorías reales presentes en el catálogo, con su conteo real de productos. */
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const p of getRealProducts()) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  }
  return counts;
}

/** Primera imagen real disponible para una categoría (para usar como thumbnail). */
export function getCategoryThumbnail(category: string): string | null {
  const match = getRealProducts().find((p) => p.category === category);
  return match?.image ?? null;
}

/**
 * Selección de "Productos Destacados" para el Home: productos reales,
 * priorizando los que sí tienen un descuento real (`compareAtPrice`), y
 * repartidos entre categorías distintas para que la vitrina no se vea toda
 * de la misma categoría. Nada de calificaciones/reseñas: no existen datos
 * reales de reviews en el catálogo, así que no se inventan.
 */
export function getFeaturedProducts(limit = 8): Product[] {
  const real = getRealProducts();
  const withDiscount = real.filter((p) => p.compareAtPrice && p.compareAtPrice > p.price);
  const seenCategories = new Set<string>();
  const picks: Product[] = [];

  const pushIfNewCategory = (list: Product[]) => {
    for (const p of list) {
      if (picks.length >= limit) return;
      if (seenCategories.has(p.category)) continue;
      seenCategories.add(p.category);
      picks.push(p);
    }
  };

  pushIfNewCategory(withDiscount);
  pushIfNewCategory(real);

  // Si aún faltan (pocas categorías), completa sin la restricción de categoría única.
  if (picks.length < limit) {
    for (const p of real) {
      if (picks.length >= limit) break;
      if (picks.includes(p)) continue;
      picks.push(p);
    }
  }

  return picks.slice(0, limit);
}

/** Parseá el campo `images` (string JSON) a un array seguro. */
export function parseImages(product: Product): string[] {
  try {
    const arr = product.images ? JSON.parse(product.images) : [];
    return Array.isArray(arr) ? arr.filter((u) => typeof u === 'string' && u.length > 0) : [];
  } catch {
    return [];
  }
}

/**
 * Marcas reales confirmadas en el catálogo (campo `brand` estructurado) --
 * usa `getRealProducts()`, así que los 4 productos de ejemplo/semilla (los
 * únicos que sí traen `brand`) quedan excluidos. Hoy ningún producto real
 * trae `brand` estructurado (viene, si acaso, embebido en el nombre), así
 * que esto devuelve una lista vacía a propósito: mejor no mostrar marcas
 * que adivinarlas o mostrar las de los productos de prueba.
 */
export function getConfirmedBrands(): { name: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const p of getRealProducts()) {
    if (p.brand) counts[p.brand] = (counts[p.brand] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
