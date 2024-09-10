"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import {
  messagesTable,
  userFriendsTable,
  usersTable,
} from "../../drizzle/schema";
import { eq } from "drizzle-orm";

const getUserFriendsQuery = async ({ user_id }: { user_id: string }) => {
  try {
    const db = drizzle(client);
    const getFriendsQuery = await db
      .select()
      .from(userFriendsTable)
      .where(eq(userFriendsTable.user_id, user_id));

    return await {
      friends: getFriendsQuery.length > 0 ? getFriendsQuery : null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
};

export default getUserFriendsQuery;
