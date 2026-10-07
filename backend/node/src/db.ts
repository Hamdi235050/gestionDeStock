import { Pool, type QueryResultRow } from "pg";
import { config } from "./config.js";

export const pool = new Pool({ connectionString: config.databaseUrl });

export const query = <T extends QueryResultRow>(
  text: string,
  values: unknown[] = [],
) => pool.query<T>(text, values);

const defaultCategories = [
  { label: "Épicerie", value: "grocery" },
  { label: "Boissons", value: "drinks" },
  { label: "Hygiène", value: "hygiene" },
] as const;

export const initializeDatabase = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      label VARCHAR(80) NOT NULL,
      value VARCHAR(80) UNIQUE NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      reference VARCHAR(80) UNIQUE NOT NULL,
      category_id INTEGER NOT NULL REFERENCES categories(id),
      quantity INTEGER NOT NULL DEFAULT 0 CHECK (quantity >= 0),
      alert_threshold INTEGER NOT NULL DEFAULT 0 CHECK (alert_threshold >= 0),
      description TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  for (const { label, value } of defaultCategories) {
    await query(
      `INSERT INTO categories (label, value)
       VALUES ($1, $2)
       ON CONFLICT (value) DO NOTHING`,
      [label, value],
    );
  }
};
