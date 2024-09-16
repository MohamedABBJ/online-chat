import UserAvatar from "@/components/user-avatar/user-avatar";
import { Check, Close } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import Notification from "./notification";
import { socket } from "@/app/socket";
import { useEffect, useState } from "react";
import verifyUserSession from "@/app/lib/dal";
import getUserFriendsQuery from "@/db/get-user-friends-query";

async function UserNotifications() {
  const [userNotifications, setUserNotifications] = useState();

  const getUserNotifications = async () => {
    const userFriends = await getUserFriendsQuery(currentUserData?.user?.id);
  };

  useEffect(() => {
    getUserNotifications();
  }, []);

  socket.on("AddUser", getUserNotifications);

  return (
    <>
      <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
        <Notification />
      </div>
    </>
  );
}

export default UserNotifications;
