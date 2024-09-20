"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import {
  privateChatTable,
  publicChatTable,
  usersTable,
} from "../../drizzle/schema";
import { eq, sql } from "drizzle-orm";

const getMesagesQuery = async ({
  chat_id,
  user_id,
}: {
  chat_id: string;
  user_id: string;
}) => {
  try {
    const db = drizzle(client);
    if (chat_id != "") {
      const getPrivateChatMessages = await db
        .select()
        .from(privateChatTable)
        .where(
          sql`${privateChatTable.user_id} = ${user_id} and ${privateChatTable.chat_id} = ${chat_id}`,
        );
      const messagesWithRole = await Promise.all(
        getPrivateChatMessages.map(async (element) => ({
          ...element,
          user_details: (
            await db
              .select()
              .from(usersTable)
              .where(eq(usersTable.id, element.user_id as string))
          )[0],
        })),
      );
      return await { messages: messagesWithRole, status: 200 };
    }

    if (chat_id == "") {
      const getPublicChatMessages = await db.select().from(publicChatTable);
      const messagesWithRole = await Promise.all(
        getPublicChatMessages.map(async (element) => ({
          ...element,
          user_details: (
            await db
              .select()
              .from(usersTable)
              .where(eq(usersTable.id, element.user_id as string))
          )[0],
        })),
      );

      return await { messages: messagesWithRole, status: 200 };
    }
  } catch (error) {
    console.log(error);
  }
};

export default getMesagesQuery;
