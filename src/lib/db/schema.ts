import { sql } from 'drizzle-orm';
import {
  sqliteTable,
  text,
  integer,
  real,
  index,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core';

// Productos
export const products = sqliteTable(
  'products',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    shortDescription: text('short_description'),
    price: real('price').notNull(),
    compareAtPrice: real('compare_at_price'),
    brand: text('brand'),
    sku: text('sku').unique(),
    image: text('image'),
    images: text('images'), // JSON array
    category: text('category'),
    problemType: text('problem_type'), // acné, manchas, piel sensible, etc.
    productType: text('product_type'), // limpiador, crema, sérum, etc.
    ingredients: text('ingredients'), // JSON
    instructions: text('instructions'),
    presentation: text('presentation'),
    inStock: integer('in_stock').default(0),
    featured: integer('featured').default(0),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    slugIdx: uniqueIndex('products_slug_idx').on(table.slug),
    categoryIdx: index('products_category_idx').on(table.category),
    brandIdx: index('products_brand_idx').on(table.brand),
    problemTypeIdx: index('products_problem_type_idx').on(table.problemType),
    productTypeIdx: index('products_product_type_idx').on(table.productType),
  })
);

// Categorías
export const categories = sqliteTable(
  'categories',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull().unique(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    image: text('image'),
    type: text('type').notNull(), // 'problem' | 'type' | 'brand'
    displayOrder: integer('display_order').default(0),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    typeIdx: index('categories_type_idx').on(table.type),
  })
);

// Órdenes/Pedidos
export const orders = sqliteTable(
  'orders',
  {
    id: text('id').primaryKey(),
    orderNumber: text('order_number').notNull().unique(),
    customerId: text('customer_id'),
    email: text('email').notNull(),
    status: text('status').notNull().default('pending'), // pending, processing, shipped, delivered, cancelled
    total: real('total').notNull(),
    subtotal: real('subtotal').notNull(),
    tax: real('tax').notNull(),
    shippingCost: real('shipping_cost').notNull(),
    shippingAddress: text('shipping_address').notNull(), // JSON
    billingAddress: text('billing_address').notNull(), // JSON
    items: text('items').notNull(), // JSON
    paymentMethodId: text('payment_method_id'),
    paymentStatus: text('payment_status').default('pending'), // pending, completed, failed
    notes: text('notes'),
    trackingNumber: text('tracking_number'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    customerIdIdx: index('orders_customer_id_idx').on(table.customerId),
    emailIdx: index('orders_email_idx').on(table.email),
    statusIdx: index('orders_status_idx').on(table.status),
    createdAtIdx: index('orders_created_at_idx').on(table.createdAt),
  })
);

// Usuarios/Clientes
export const users = sqliteTable(
  'users',
  {
    id: text('id').primaryKey(),
    email: text('email').notNull().unique(),
    name: text('name'),
    phone: text('phone'),
    passwordHash: text('password_hash'),
    role: text('role').default('customer'), // customer, admin
    addresses: text('addresses'), // JSON
    preferences: text('preferences'), // JSON
    isVerified: integer('is_verified').default(0),
    verificationToken: text('verification_token'),
    resetToken: text('reset_token'),
    resetTokenExpiry: text('reset_token_expiry'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    emailIdx: uniqueIndex('users_email_idx').on(table.email),
  })
);

// Carrito
export const carts = sqliteTable(
  'carts',
  {
    id: text('id').primaryKey(),
    sessionId: text('session_id').notNull().unique(),
    userId: text('user_id'),
    items: text('items').notNull(), // JSON
    expiresAt: text('expires_at').notNull(),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    userIdIdx: index('carts_user_id_idx').on(table.userId),
    sessionIdIdx: uniqueIndex('carts_session_id_idx').on(table.sessionId),
  })
);

// Reseñas
export const reviews = sqliteTable(
  'reviews',
  {
    id: text('id').primaryKey(),
    productId: text('product_id').notNull(),
    userId: text('user_id'),
    authorName: text('author_name').notNull(),
    authorEmail: text('author_email').notNull(),
    rating: integer('rating').notNull(), // 1-5
    title: text('title'),
    content: text('content'),
    helpful: integer('helpful').default(0),
    status: text('status').default('pending'), // pending, approved, rejected
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    productIdIdx: index('reviews_product_id_idx').on(table.productId),
    userIdIdx: index('reviews_user_id_idx').on(table.userId),
    statusIdx: index('reviews_status_idx').on(table.status),
  })
);

// Promociones/Cupones
export const coupons = sqliteTable(
  'coupons',
  {
    id: text('id').primaryKey(),
    code: text('code').notNull().unique(),
    description: text('description'),
    discountType: text('discount_type').notNull(), // percentage, fixed
    discountValue: real('discount_value').notNull(),
    maxUses: integer('max_uses'),
    usedCount: integer('used_count').default(0),
    minOrderAmount: real('min_order_amount'),
    validFrom: text('valid_from').notNull(),
    validUntil: text('valid_until').notNull(),
    isActive: integer('is_active').default(1),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    codeIdx: uniqueIndex('coupons_code_idx').on(table.code),
    isActiveIdx: index('coupons_is_active_idx').on(table.isActive),
  })
);

// Contenido (Blog, páginas estáticas, etc.)
export const content = sqliteTable(
  'content',
  {
    id: text('id').primaryKey(),
    slug: text('slug').notNull().unique(),
    title: text('title').notNull(),
    excerpt: text('excerpt'),
    content: text('content').notNull(),
    type: text('type').notNull(), // blog, page, faq
    author: text('author'),
    featured: integer('featured').default(0),
    publishedAt: text('published_at'),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    slugIdx: uniqueIndex('content_slug_idx').on(table.slug),
    typeIdx: index('content_type_idx').on(table.type),
  })
);
