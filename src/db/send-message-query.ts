"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { messagesTable, usersTable } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

const sendMessageQuery = async ({
  userID,
  message,
}: {
  userID: string;
  message: string;
}) => {
  try {
    const db = drizzle(client);

    const insertMessage = (
      await db
        .insert(messagesTable)
        .values({ message: message, user_id: userID })
        .returning({ insertedId: messagesTable.id })
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
  } catch (error) {
    console.log(error);
  }
};

export default sendMessageQuery;
