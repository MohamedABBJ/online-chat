import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const checkIfUserOrFriendBlocked = async ({
  requiredData,
}: {
  requiredData: { user_id: string; friend_id: string };
}) => {
  const db = drizzle(client);

  const checkIfAlreadyBlocked = async () => {
    db.select()
      .from(userFriendsTable)
      .where(
        sql`${userFriendsTable.user_id} = ${requiredData.user_id} and ${userFriendsTable.friend_id} = ${requiredData.friend_id}`,
      );
  };

  const userBlocking = await db
    .select()
    .from(userFriendsTable)
    .where(
      sql`${userFriendsTable.user_id} = ${requiredData.user_id} and ${userFriendsTable.friend_id} = ${requiredData.friend_id}`,
    );

  if (userBlocking.length == 1) {
    return "blockedUser";
  }

  const friendBlocking = await db
    .select()
    .from(userFriendsTable)
    .where(
      sql`${userFriendsTable.user_id} = ${requiredData.friend_id} and ${userFriendsTable.friend_id} = ${requiredData.user_id}`,
    );

  if (friendBlocking.length == 1) {
    return "blockedFriend";
  }
};

export default checkIfUserOrFriendBlocked;
