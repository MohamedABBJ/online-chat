"use server";

import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const unblockUserQuery = async ({
  requiredData,
}: {
  requiredData: { user_id: string; friend_id: string };
}) => {
  try {
    const db = drizzle(client);
    console.log(requiredData);
    await db
      .update(userFriendsTable)
      .set({ requestState: "accepted" })
      .where(sql`${userFriendsTable.user_id} = ${requiredData.user_id}`);

    return;
  } catch (error) {
    console.log(error);
  }
};

export default unblockUserQuery;
