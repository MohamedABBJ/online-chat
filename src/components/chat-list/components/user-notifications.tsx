import UserAvatar from "@/components/user-avatar/user-avatar";
import { Check, Close } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import Notification from "./friend-request-notification";
import { socket } from "@/app/socket";
import { useEffect, useState } from "react";

import getUserNotifications from "@/utils/get-notifications";
import FriendRequestNotification from "./friend-request-notification";

function UserNotifications() {
  const [userNotifications, setUserNotifications] =
    useState<UserFriendsArrayProps | null>();

  useEffect(() => {
    const getNotificationsFun = async () => {
      setUserNotifications(
        await getUserNotifications({ friendState: "pending" }),
      );
    };
    getNotificationsFun();
  }, []);

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
