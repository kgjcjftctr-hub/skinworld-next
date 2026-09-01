import Database from 'better-sqlite3';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q');

  if (!query || query.length < 2) {
    return NextResponse.json({ products: [], brands: [], categories: [] });
  }

  try {
    const db = new Database('data/skinworld.db');
    const searchTerm = `%${query}%`;

    const products = db.prepare(
      'SELECT id, name, slug, price, image FROM products WHERE name LIKE ? OR description LIKE ? LIMIT 10'
    ).all(searchTerm, searchTerm);

    const brands = db.prepare(
      'SELECT DISTINCT brand FROM products WHERE brand LIKE ? LIMIT 5'
    ).all(searchTerm);

    const categories = db.prepare(
      'SELECT DISTINCT category FROM products WHERE category LIKE ? LIMIT 5'
    ).all(searchTerm);

    db.close();

    return NextResponse.json({
      products,
      brands: brands.map((b: any) => b.brand),
      categories: categories.map((c: any) => c.category),
    });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
