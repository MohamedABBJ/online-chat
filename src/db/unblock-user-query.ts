"use server";

import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import checkIfBothBlocked from "./check-if-both-blocked";
import client from "./client";

const unblockUserQuery = async ({
  requiredData,
  mode,
}: {
  requiredData: { user_id: string; friend_id: string };
  mode: "unblockFriend" | "unblockUser";
}) => {
  try {
    const db = drizzle(client);
    const unblockingHandler =
      mode == "unblockFriend" ? "blockedUser" : "blockedFriend";

    const blockingHandler =
      (await checkIfBothBlocked({ requiredData: requiredData })) == "blocked"
        ? unblockingHandler
        : "accepted";

    await db
      .update(userFriendsTable)
      .set({ requestState: blockingHandler })
      .where(
        sql`${userFriendsTable.user_id} = ${requiredData.user_id} or ${userFriendsTable.user_id} = ${requiredData.friend_id} and ${userFriendsTable.friend_id} = ${requiredData.user_id} or  ${userFriendsTable.friend_id} = ${requiredData.friend_id}`,
      );

    return;
  } catch (error) {
    console.log(error);
  }
};

export default unblockUserQuery;
