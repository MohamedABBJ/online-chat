import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";
import userFriendsStore from "@/store/user-friends-store";
import getUserNotifications from "@/utils/get-notifications";
import { useEffect } from "react";
import FriendProfile from "./friend-profile";

function FriendsList({ session }: { session: UserSessionProps }) {
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

    if (session) {
      getUserFriendsFun();
    }

    return () => {
      socket.off("getNotificationsFun");
    };
  }, [session]);

  return (
    <div>
      {friends?.friends &&
        friends.friends.map((element) => (
          <FriendProfile
            session={session}
            friendDetails={element}
            key={element.id}
          />
        ))}
    </div>
  );
}

export default FriendsList;
