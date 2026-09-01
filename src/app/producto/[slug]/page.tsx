import Database from 'better-sqlite3';
import { formatPrice } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProductClient } from './product-client';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

function getProduct(slug: string) {
  try {
    const db = new Database('data/skinworld.db');
    const product = db.prepare('SELECT * FROM products WHERE slug = ?').get(slug);
    db.close();
    return product;
  } catch (error) {
    console.error('Error reading product:', error);
    return null;
  }
}

function getRelatedProducts(category: string, currentSlug: string) {
  try {
    const db = new Database('data/skinworld.db');
    const products = db.prepare(
      'SELECT * FROM products WHERE category = ? AND slug != ? LIMIT 4'
    ).all(category, currentSlug);
    db.close();
    return products;
  } catch (error) {
    console.error('Error reading related products:', error);
    return [];
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.slug);
  const relatedProducts = product ? getRelatedProducts(product.category, params.slug) : [];

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

  return <ProductClient product={product} relatedProducts={relatedProducts} />;
}
