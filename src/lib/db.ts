import { Pool } from "pg";
import type { PGlite } from "@electric-sql/pglite";

const SCHEMA = `
CREATE TABLE IF NOT EXISTS registrations (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT NOT NULL,
  college     TEXT,
  course_slug TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS registrations_created_idx ON registrations (created_at DESC);
`;

type Runner = (text: string, params?: unknown[]) => Promise<Record<string, unknown>[]>;

let runner: Promise<Runner> | undefined;

async function init(): Promise<Runner> {
  const url = process.env.DATABASE_URL;
  if (url) {
    const pool = new Pool({ connectionString: url });
    await pool.query(SCHEMA);
    return async (text, params) => (await pool.query(text, params as unknown[])).rows;
  }
  // Local dev: embedded Postgres, no install needed.
  const { PGlite } = await import("@electric-sql/pglite");
  const db: PGlite = new PGlite("./.pglite-data");
  await db.exec(SCHEMA);
  return async (text, params) =>
    (await db.query(text, params as unknown[])).rows as Record<string, unknown>[];
}

export function query(text: string, params?: unknown[]) {
  runner ??= init();
  return runner.then((run) => run(text, params));
}
