import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const checkIfBothBlocked = async ({
  requiredData,
}: {
  requiredData: { user_id: string; friend_id: string };
}) => {
  const db = drizzle(client);

  const checkIfBothBlockedQuery = await db
    .select({ requestState: userFriendsTable.requestState })
    .from(userFriendsTable)
    .where(
      sql`${userFriendsTable.user_id} = ${requiredData.user_id} and ${userFriendsTable.friend_id} = ${requiredData.friend_id} or ${userFriendsTable.user_id} = ${requiredData.friend_id} and ${userFriendsTable.friend_id} = ${requiredData.user_id}`,
    );

  if ((await checkIfBothBlockedQuery.length) > 0) {
    return checkIfBothBlockedQuery[0].requestState;
  }
  return false;
};

export default checkIfBothBlocked;
