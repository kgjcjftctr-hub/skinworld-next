import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import productsData from '@/public/products-data.json';
import { ProductDetailClient } from '@/components/product-detail-client';

// Requerido por Cloudflare Pages (@cloudflare/next-on-pages): esta ruta es
// dinámica (no tiene generateStaticParams) y sin declarar el Edge Runtime
// el build falla y el deploy nunca llega a producción.
export const runtime = 'edge';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug: rawSlug } = await params;

  // En el Edge Runtime de Cloudflare (@cloudflare/next-on-pages) el segmento
  // dinámico puede llegar todavía percent-encoded (ej. "%C3%BA" en vez de
  // "ú") para slugs con acentos o "ñ", a diferencia de Node donde Next.js ya
  // lo decodifica. ~20 de los 165 productos tienen slugs con esos caracteres
  // y sin este fallback mostraban "Producto no encontrado". Se prueba con el
  // valor tal cual y, si no matchea, decodificado.
  let slug = rawSlug;
  try {
    slug = decodeURIComponent(rawSlug);
  } catch {
    // rawSlug ya viene decodificado o no es un percent-encoding válido; se
    // usa tal cual.
  }

  const product = (productsData as any[]).find((p) => p.slug === slug || p.slug === rawSlug);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/tienda" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la tienda</span>
          </Link>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Producto no encontrado</h1>
            <p className="text-slate-600 mb-8">Lo sentimos, el producto que buscas no existe.</p>
            <Link href="/tienda" className="inline-block bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600">
              Ir a la tienda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedProducts = (productsData as any[])
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
