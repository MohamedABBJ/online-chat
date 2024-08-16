import { relations } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  user_id: text("user-id"),
  user_name: text("user_name"),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  messages: many(messagesTable),
}));

export const messagesTable = pgTable("messages", {
  id: serial("id").primaryKey(),
  user_id: text("user_id"),
  message: text("message"),
});

export const messagesRelations = relations(messagesTable, ({ one }) => ({
  messageSentByUser: one(usersTable, {
    fields: [messagesTable.user_id],
    references: [usersTable.user_id],
  }),
}));
