import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const privateChatIDQuery = async ({
  chat_id,
  user_id,
}: {
  chat_id: string;
  user_id: string;
}) => {
  const db = drizzle(client);

  try {
    const getPrivateChat = await db
      .select()
      .from(userFriendsTable)
      .where(
        sql`${userFriendsTable.chat_id} = ${chat_id} and ${userFriendsTable.user_id} = ${user_id} or ${userFriendsTable.friend_id} = ${user_id}`,
      );
    if (getPrivateChat.length > 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

export default privateChatIDQuery;
