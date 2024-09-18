"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import {
  messagesTable,
  userFriendsTable,
  usersTable,
} from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import chatTableHandler from "../../drizzle/dinamic-chat-table";

const privateChatQuery = async ({ action }: { action: "create" | "chat" }) => {
  try {
    const db = drizzle(client);
    return await { response: "The user has beed added correctly", status: 200 };
  } catch (error) {
    console.log(error);
  }
};

export default privateChatQuery;
