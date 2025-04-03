import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";
import userFriendsStore from "@/store/user-friends-store";
import getUserNotifications from "@/utils/get-notifications";
import { useEffect } from "react";
import FriendProfile from "./friend-profile";

function FriendsList({
  session,
  userFriends,
}: {
  session: UserSessionProps;
  userFriends: unknown;
}) {
  const { friends, setFriends } = userFriendsStore();

  useEffect(() => {
    const getUserFriendsFun = async () => {
      setFriends(
        await getUserNotifications({
          friendState: "accepted",
          session: session,
        }),
      );
    };

    socket.on("updateFriendList", async () => await getUserFriendsFun());

    setFriends(userFriends);

    return () => {
      socket.off("getNotificationsFun");
    };
  }, [session]);

  return (
    <div>
      {friends?.friends.length > 0
        ? friends.friends.map((element) => (
            <FriendProfile
              session={session}
              friendDetails={element}
              key={element.id}
            />
          ))
        : null}
    </div>
  );
}

export default FriendsList;
