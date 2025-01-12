"use server";

import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import checkIfUserOrFriendBlocked from "./check-if-user-or-friend-blocked";
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
      .set({
        requestState:
          typeOfQuery == "blocked"
            ? await checkIfUserOrFriendBlocked({
                requiredData: requiredData,
              })
            : "removed",
      })
      .where(
        sql`${userFriendsTable.user_id} = ${requiredData.user_id} and ${userFriendsTable.friend_id} = ${requiredData.friend_id} or ${userFriendsTable.user_id} = ${requiredData.friend_id} and ${userFriendsTable.friend_id} = ${requiredData.user_id}`,
      );

    return;
  } catch (error) {
    console.log(error);
  }
};

export default removeOrBlockUserQuery;
