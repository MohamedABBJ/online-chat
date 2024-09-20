"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import {
  privateChatTable,
  publicChatTable,
  userFriendsTable,
  usersTable,
} from "../../drizzle/schema";
import { eq, sql } from "drizzle-orm";
import { pgTable, serial, text } from "drizzle-orm/pg-core";

const sendMessageQuery = async ({
  userID,
  message,
  chat_id,
  friend_id,
}: {
  userID: string;
  message: string;
  friend_id?: string;
  chat_id: string;
}) => {
  try {
    const db = drizzle(client);

    if (chat_id == "") {
      const insertMessage = (
        await db
          .insert(publicChatTable)
          .values({ message: message, user_id: userID })
          .returning({
            insertedId: publicChatTable.id,
          })
      )[0];

      const getUserData = {
        user_details: (
          await db.select().from(usersTable).where(eq(usersTable.id, userID))
        )[0],
        id: insertMessage.insertedId,
        user_id: userID,
        message: message,
      };

      return await { messages: getUserData, status: 200 };
    }

    if (chat_id != "") {
      const insertMessage = (
        await db
          .insert(privateChatTable)
          .values({ message: message, user_id: userID, chat_id: chat_id })
          .returning({
            insertedId: privateChatTable.id,
          })
      )[0];

      const getUserData = {
        user_details: (
          await db.select().from(usersTable).where(eq(usersTable.id, userID))
        )[0],
        id: insertMessage.insertedId,
        user_id: userID,
        message: message,
      };

      return await { messages: getUserData, status: 200 };
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendMessageQuery;

/*
 const checkIfChatIDExists = (await db
        .select({ chat_id: userFriendsTable.chat_id })
        .from(userFriendsTable)
        .where(
          sql`${userFriendsTable.user_id} = ${userID} and ${userFriendsTable.friend_id} = ${friend_id}`,
        ))[0].chat_id;
        
        if(checkIfChatIDExists == ''){
        const generateChatId = nanoid();
        const privateChatID = `chat-${generateChatId}`;
        const updateChatID = await db.update(userFriendsTable).set({chat_id:generateChatId})
        const sendPrivateMessage = db.insert(messagesTable({chatTableName:'test'}))
      } 
*/
