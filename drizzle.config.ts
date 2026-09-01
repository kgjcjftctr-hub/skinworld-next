import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/db/schema.ts',
  out: './migrations',
  driver: 'better-sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'file:./data/skinworld.db',
  },
  verbose: true,
  strict: true,
} satisfies Config;
