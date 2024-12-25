import { defineConfig } from "drizzle-kit";

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
