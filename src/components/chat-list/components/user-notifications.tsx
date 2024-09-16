import UserAvatar from "@/components/user-avatar/user-avatar";
import { Check, Close } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import Notification from "./notification";
import { socket } from "@/app/socket";
import { useEffect, useState } from "react";
import verifyUserSession from "@/app/lib/dal";
import getUserFriendsQuery from "@/db/get-user-friends-query";
import getUserNotifications from "@/utils/get-notifications";

function UserNotifications() {
  const [userNotifications, setUserNotifications] = useState<UserFriends>();

  useEffect(() => {
    const getNotificationsFun = async () => {
      setUserNotifications(await getUserNotifications());
    };
    getNotificationsFun();
  }, []);

  socket.on("AddUser", getUserNotifications);

  return (
    <>
      <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
        {userNotifications?.friends && userNotifications?.friends?.length > 0
          ? userNotifications?.friends?.map((element) => <Notification />)
          : null}
      </div>
    </>
  );
}

export default UserNotifications;
