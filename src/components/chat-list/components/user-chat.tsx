import { useEffect, useState } from "react";
import FriendProfile from "./friend-profile";
import getUserNotifications from "@/utils/get-notifications";

function FriendsList() {
  const [userFriends, setUserFriends] =
    useState<UserFriendsArrayProps | null>();

  const getUserFriendsFun = async () => {
    setUserFriends(await getUserNotifications({ friendState: "accepted" }));
  };
  useEffect(() => {
    getUserFriendsFun();
  }, []);

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
