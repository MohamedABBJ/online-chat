import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: "db://db:123456@localhost:5432/db?sslmode=enable",
  },
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  migrations: {
    prefix: "supabase",
  },
});
