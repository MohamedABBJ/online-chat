import { relations } from "drizzle-orm";
import { pgSchema, pgTable, serial, text } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("online-chat");

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  user_name: text("user_name"),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  messages: many(messagesTable),
}));

export const messagesTable = pgTable("messages", {
  id: serial("id").primaryKey(),
  user_name: text("user_name"),
  message: text("message"),
});

export const messagesRelations = relations(messagesTable, ({ one }) => ({
  messageSentByUser: one(usersTable, {
    fields: [messagesTable.user_name],
    references: [usersTable.user_name],
  }),
}));
