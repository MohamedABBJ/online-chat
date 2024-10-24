"use server";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import {
  privateChatTable,
  publicChatTable,
  usersTable,
} from "../../drizzle/schema";
import client from "./client";

const sendMessageQuery = async ({
  userID,
  message,
  chat_id,
  friend_id,
  message_id,
}: {
  userID: string;
  message: string;
  friend_id?: string;
  chat_id: string;
  message_id: string | null;
}) => {
  try {
    const db = drizzle(client);

    if (chat_id == "") {
      const insertMessage = (
        await db
          .insert(publicChatTable)
          .values({ message: message, user_id: userID, reply: message_id })
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
        chat_id: chat_id,
        reply: message_id,
        messageReplyData: message_id
          ? (
              await db
                .select()
                .from(publicChatTable)
                .where(eq(publicChatTable.id, Number(message_id)))
            )[0]
          : null,
      };

      return await getUserData;
    }

    if (chat_id != "") {
      const insertMessage = (
        await db
          .insert(privateChatTable)
          .values({
            message: message,
            user_id: userID,
            chat_id: chat_id,
            reply: message_id,
          })
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
        chat_id: chat_id,
        reply: message_id,
        messageReplyData: message_id
          ? (
              await db
                .select()
                .from(privateChatTable)
                .where(eq(privateChatTable.id, Number(message_id)))
            )[0]
          : null,
      };

      return await getUserData;
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
