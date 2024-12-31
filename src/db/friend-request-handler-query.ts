"use server";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { nanoid } from "nanoid";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const friendRequestHandlerQuery = async ({
  user_id,
  friend_id,
  requestState,
  chat_id,
}: {
  user_id: string;
  friend_id: string;
  chat_id: string;
  requestState: "accepted" | "denied";
}) => {
  const generateChatId = nanoid();

  try {
    const db = drizzle(client);

    if (requestState == "accepted") {
      await db
        .update(userFriendsTable)
        .set({ requestState: requestState, chat_id: generateChatId })
        .where(
          sql`${userFriendsTable.user_id} = ${user_id} and ${userFriendsTable.friend_id} = ${friend_id}`,
        );
    }

    return await { status: 200 };
  } catch (error) {
    console.log(error);
  }
};

export default friendRequestHandlerQuery;
