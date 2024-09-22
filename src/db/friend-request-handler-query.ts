"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import {
  messagesTable,
  userFriendsTable,
  usersTable,
} from "../../drizzle/schema";
import { eq, sql } from "drizzle-orm";
import { nanoid } from "nanoid";
import { customType, pgTable, serial, text } from "drizzle-orm/pg-core";
import { chatTable } from "../../drizzle/dinamic-chat-table";

const friendRequestHandlerQuery = async ({
  user_id,
  friend_id,
  requestState,
}: {
  user_id: string;
  friend_id: string;
  requestState: "accepted" | "denied";
}) => {
  const generateChatId = nanoid();

  try {
    const db = drizzle(client);

    await db
      .update(userFriendsTable)
      .set(
        requestState == "accepted"
          ? { requestState: requestState, chat_id: generateChatId }
          : { requestState: requestState },
      )
      .where(
        sql`${userFriendsTable.user_id} = ${user_id} and ${userFriendsTable.friend_id} = ${friend_id}`,
      );

    return await { status: 200 };
  } catch (error) {
    console.log(error);
  }
};

export default friendRequestHandlerQuery;
