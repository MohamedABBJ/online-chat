"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import {
  messagesTable,
  userFriendsTable,
  usersTable,
} from "../../drizzle/schema";
import { eq, sql } from "drizzle-orm";
import getUserDataQuery from "./get-user-data-query";

const getUserFriendsQuery = async ({
  user_id,
  friendState,
}: {
  user_id: string;
  friendState: "pending" | "accepted";
}) => {
  try {
    const db = drizzle(client);
    const getFriendsQuery = await db
      .select()
      .from(userFriendsTable)
      .where(
        sql`${userFriendsTable.user_id} = ${user_id} and ${userFriendsTable.requestState} = ${friendState}`,
      );

    const friendDataQuery = Promise.all(
      await getFriendsQuery.map(async (element) => ({
        ...element,
        friendData: await getUserDataQuery({
          user_id: element.friend_id,
        }),
      })),
    );

    return await {
      friends: getFriendsQuery.length > 0 ? await friendDataQuery : null,
    };
  } catch (error) {
    console.log(error);
  }
};

export default getUserFriendsQuery;
