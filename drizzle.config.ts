import { defineConfig } from "drizzle-kit";

/* url: "db://db:123456@localhost:5432/db?sslmode=enable" */

export default defineConfig({
  dbCredentials: {
    url: "postgres://postgres:123456@localhost:5432/postgres?sslmode=disable",
  },
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  migrations: {
    prefix: "supabase",
  },
});
