import { socket } from "@/app/socket";
import { useEffect, useState } from "react";

import UserSessionProps from "@/interfaces/user-session-props";
import getUserNotifications from "@/utils/get-notifications";
import FriendRequestNotification from "./friend-request-notification";

function UserNotifications({ session }: { session: UserSessionProps }) {
  const [userNotifications, setUserNotifications] =
    useState<UserFriendsArrayProps | null>();

  useEffect(() => {
    const getNotificationsFun = async () => {
      setUserNotifications(
        await getUserNotifications({ friendState: "pending", user: session }),
      );
    };
    if (session) {
      getNotificationsFun();
    }
  }, [session]);

  socket.on("AddUser", getUserNotifications);

  return (
    <>
      <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
        {userNotifications?.friends && userNotifications?.friends?.length > 0
          ? userNotifications?.friends?.map((element) => (
              <FriendRequestNotification
                notificationDetails={element}
                key={element.id}
              />
            ))
          : null}
      </div>
    </>
  );
}

export default UserNotifications;
