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
  data: "oAuthUser" | "Guest" | "AI";
}>({
  dataType() {
    return "oAuthUser";
  },
});

const customMessageStatusType = customType<{
  data: "sent" | "deleted";
}>({
  dataType() {
    return "sent";
  },
});

const requestStateType = customType<{
  data: "pending" | "accepted" | "denied";
}>({
  dataType() {
    return "pending";
  },
});

const chatReplyIDType = customType<{
  data: string | null;
}>({
  dataType() {
    return "undefined";
  },
});

const imageType = customType<{
  data: string | null;
}>({
  dataType() {
    return "null";
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

export const publicChatTable = pgTable("public_chat", {
  id: serial("id").primaryKey(),
  user_id: text("user_id"),
  message: text("message"),
  image: imageType("image").default(null),
  status: customMessageStatusType("status").notNull().default("sent"),
  reply: chatReplyIDType("reply").default(null),
});

export const privateChatTable = pgTable("private_chat", {
  id: serial("id").primaryKey(),
  user_id: text("user_id"),
  message: text("message"),
  image: imageType("image").default(null),
  chat_id: text("chat_id"),
  status: customMessageStatusType("status").notNull().default("sent"),
  reply: chatReplyIDType("reply").default(null),
});

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const userFriendsTable = pgTable("user_friends", {
  id: serial("id").primaryKey(),
  user_id: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  friend_id: text("friend_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  chat_id: text("chat_id"),
  requestState: requestStateType("request_state").notNull().default("pending"),
});

export const joinedChatID = pgTable("current_joined_chat", {
  id: serial("id").primaryKey(),
  user_id: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  last_chat_id: text("last_chat_id"),
  current_chat_id: text("current_chat_id"),
});
