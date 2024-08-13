import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  user_id: text("user-id"),
  user_name: text("user_name"),
});
