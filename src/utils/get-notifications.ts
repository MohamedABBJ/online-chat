"use server";

import getUserFriendsQuery from "@/db/get-user-friends-query";
import UserSessionProps from "@/interfaces/user-session-props";

const getUserNotifications = async ({
  session,
  friendState,
}: {
  session: UserSessionProps;
  friendState: "accepted" | "pending";
}) => {
  if (session) {
    const userFriends = await getUserFriendsQuery({
      user_id: session.user?.id as string,
      friendState: friendState,
    });
    return userFriends;
  }
  return;
};

export default getUserNotifications;
