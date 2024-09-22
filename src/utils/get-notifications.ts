"use server";

import verifyUserSession from "@/app/lib/dal";
import getUserFriendsQuery from "@/db/get-user-friends-query";

const getUserNotifications = async ({
  friendState,
}: {
  friendState: "accepted" | "pending";
}) => {
  const currentUserData = await verifyUserSession();
  if (currentUserData) {
    const userFriends = await getUserFriendsQuery({
      user_id: currentUserData.id as string,
      friendState: friendState,
    });
    return userFriends;
  }
  return;
};

export default getUserNotifications;
