import { socket } from "@/app/socket";
import { useEffect, useState } from "react";

import UserSessionProps from "@/interfaces/user-session-props";
import getUserNotifications from "@/utils/get-notifications";
import FriendRequestNotification from "./friend-request-notification";
import FriendNotificationSent from "./friend-request-sent-notification";
import NoData from "./no-data";

function UserNotifications({ session }: { session: UserSessionProps }) {
  const [userNotifications, setUserNotifications] =
    useState<UserFriendsArrayProps | null>();

  useEffect(() => {
    const getNotificationsFun = async () => {
      setUserNotifications(
        await getUserNotifications({
          friendState: "pending",
          session: session,
        }),
      );
    };
    socket.on(
      "AddUser",
      async () =>
        await getUserNotifications({
          friendState: "pending",
          session: session,
        }),
    );

    socket.on("updateFriendList", async () => getNotificationsFun());

    if (session) {
      getNotificationsFun();
    }
    return () => {
      socket.off("AddUser");
      socket.off("updateFriendList");
    };
  }, [session]);

  return (
    <>
      <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
        {userNotifications?.friends &&
        userNotifications?.friends?.length > 0 ? (
          userNotifications?.friends?.map((element) =>
            element.friend_id != session.user.id ? (
              <FriendNotificationSent
                notificationDetails={element}
                key={element.id}
              />
            ) : (
              <FriendRequestNotification
                userNotifications={userNotifications}
                notificationDetails={element}
                key={element.id}
              />
            ),
          )
        ) : (
          <NoData view="friends" />
        )}
      </div>
    </>
  );
}

export default UserNotifications;
