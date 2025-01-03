"use server";

import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const removeOrBlockUserQuery = async ({
  requiredData,
  typeOfQuery,
}: {
  requiredData: { user_id: string; friend_id: string };
  typeOfQuery: "removed" | "blocked";
}) => {
  try {
    const db = drizzle(client);

    await db
      .update(userFriendsTable)
      .set({ requestState: typeOfQuery })
      .where(eq(userFriendsTable.user_id, requiredData.user_id));

    console.log(`The user has been ${typeOfQuery} correctly`);

    return;
  } catch (error) {
    console.log(error);
  }
};

export default removeOrBlockUserQuery;
