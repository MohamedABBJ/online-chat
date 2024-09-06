import { relations } from "drizzle-orm";
import {
  customType,
  integer,
  pgSchema,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { AdapterAccountType } from "next-auth/adapters";

const customUserType = customType<{
  data: "oAuthUser" | "Guest";
}>({
  dataType() {
    return "oAuthUser";
  },
});

export const mySchema = pgSchema("online_chat");

export const usersTable = pgTable("users", {
  id: text("user_id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").default("undefined"),
  image: text("image").default("undefined"),
  type: customUserType("type").default("oAuthUser"),
});

export const oAuthAccountsTable = pgTable("oAuthAccounts", {
  userId: text("userId")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  type: text("type").$type<AdapterAccountType>().notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
});

export const messagesTable = pgTable("messages", {
  id: text("id").primaryKey(),
  user_id: text("user_id"),
  message: text("message"),
});

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});
