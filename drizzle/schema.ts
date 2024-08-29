import { relations } from "drizzle-orm";
import { integer, pgSchema, pgTable, serial, text } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("online_chat");

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  user_name: text("user_name"),
  user_type: text("user_type"),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  messages: many(messagesTable),
}));

export const messagesTable = pgTable("messages", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id"),
  message: text("message"),
});

export const messagesRelations = relations(messagesTable, ({ one }) => ({
  messageSentByUser: one(usersTable, {
    fields: [messagesTable.user_id],
    references: [usersTable.id],
  }),
}));
