"use server";

import verifyUserSession from "@/app/lib/dal";
import getUserFriendsQuery from "@/db/get-user-friends-query";

const getUserNotifications = async ({
  friendState,
}: {
  friendState: "accepted" | "pending";
}) => {
  const currentUserData = await verifyUserSession();
  const userFriends = await getUserFriendsQuery({
    user_id: currentUserData?.user?.id,
    friendState: friendState,
  });
  return userFriends;
};

export default getUserNotifications;
