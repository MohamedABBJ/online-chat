import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { userFriendsTable } from "../../drizzle/schema";
import client from "./client";

const checkIfUserOrFriendBlocked = async ({
  requiredData,
}: {
  requiredData: { user_id: string; friend_id: string };
}) => {
  const blockedStates = {
    blockedUser: "blockedUser",
    blockedFriend: "blockedFriend",
  };
  const db = drizzle(client);

  const checkIfAlreadyBlocked = async () => {
    const friendBlocked = await db
      .select()
      .from(userFriendsTable)
      .where(
        sql`${userFriendsTable.user_id} = ${requiredData.user_id} and ${userFriendsTable.friend_id} = ${requiredData.friend_id} and ${userFriendsTable.requestState} = ${blockedStates.blockedFriend}`,
      );
    const userBlocked = await db
      .select()
      .from(userFriendsTable)
      .where(
        sql`${userFriendsTable.user_id} = ${requiredData.user_id} and ${userFriendsTable.friend_id} = ${requiredData.friend_id} and ${userFriendsTable.requestState} = ${blockedStates.blockedUser}`,
      );
    if (friendBlocked.length > 0 || userBlocked.length > 0) {
      return true;
    }
    return false;
  };

  const userBlocking = await db
    .select()
    .from(userFriendsTable)
    .where(
      sql`${userFriendsTable.user_id} = ${requiredData.user_id} and ${userFriendsTable.friend_id} = ${requiredData.friend_id}`,
    );

  const friendBlocking = await db
    .select()
    .from(userFriendsTable)
    .where(
      sql`${userFriendsTable.user_id} = ${requiredData.friend_id} and ${userFriendsTable.friend_id} = ${requiredData.user_id}`,
    );

  if (await checkIfAlreadyBlocked()) {
    return "blocked";
  }
  if (userBlocking.length == 1) {
    return "blockedUser";
  }
  if (friendBlocking.length == 1) {
    return "blockedFriend";
  }
};

export default checkIfUserOrFriendBlocked;
