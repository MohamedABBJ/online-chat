import UserSessionProps from "@/interfaces/user-session-props";
import getUserNotifications from "@/utils/get-notifications";
import { useEffect, useState } from "react";
import FriendProfile from "./friend-profile";

function FriendsList({ session }: { session: UserSessionProps }) {
  const [userFriends, setUserFriends] =
    useState<UserFriendsArrayProps | null>();

  const getUserFriendsFun = async () => {
    setUserFriends(
      await getUserNotifications({ friendState: "accepted", session: session }),
    );
  };
  useEffect(() => {
    if (session) {
      getUserFriendsFun();
    }
  }, [session]);

  return (
    <div className="flex h-full items-start overflow-y-scroll p-4">
      {userFriends?.friends &&
        userFriends.friends.map((element) => (
          <FriendProfile friendDetails={element} key={element.id} />
        ))}
    </div>
  );
}

export default FriendsList;
