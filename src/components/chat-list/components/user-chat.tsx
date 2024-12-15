import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";
import getUserNotifications from "@/utils/get-notifications";
import { useEffect, useState } from "react";
import FriendProfile from "./friend-profile";

function FriendsList({ session }: { session: UserSessionProps }) {
  const [userFriends, setUserFriends] =
    useState<UserFriendsArrayProps | null>();

  useEffect(() => {
    const getUserFriendsFun = async () => {
      setUserFriends(
        await getUserNotifications({
          friendState: "accepted",
          session: session,
        }),
      );
    };

    socket.on("getNotificationsFun", async () => await getUserFriendsFun());

    if (session) {
      getUserFriendsFun();
    }

    return () => {
      socket.off("getNotificationsFun");
    };
  }, [session]);

  return (
    <div>
      {userFriends?.friends &&
        userFriends.friends.map((element) => (
          <FriendProfile friendDetails={element} key={element.id} />
        ))}
    </div>
  );
}

export default FriendsList;
