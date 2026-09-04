import fs from 'fs';
import path from 'path';

let cachedProducts: any[] | null = null;

export function getProducts() {
  if (cachedProducts) {
    return cachedProducts;
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'products-data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    cachedProducts = JSON.parse(fileContents);
    return cachedProducts;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}
