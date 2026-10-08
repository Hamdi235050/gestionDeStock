import { Pool, type QueryResultRow } from "pg";
import { config } from "./config.js";

export const pool = new Pool({ connectionString: config.databaseUrl });

export const query = <T extends QueryResultRow>(
  text: string,
  values: unknown[] = [],
) => pool.query<T>(text, values);

export const initializeDatabase = async () => {
  await query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      reference VARCHAR(80) UNIQUE NOT NULL,
      category VARCHAR(50),
      quantity INTEGER NOT NULL DEFAULT 0 CHECK (quantity >= 0),
      alert_threshold INTEGER NOT NULL DEFAULT 0 CHECK (alert_threshold >= 0),
      description TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
};
