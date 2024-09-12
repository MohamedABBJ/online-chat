import UserAvatar from "@/components/user-avatar/user-avatar";
import { Check, Close } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import Notification from "./notification";

function UserNotifications() {
  return (
    <>
      <div className="flex h-full flex-col gap-4 overflow-y-scroll p-4">
        <Notification />
      </div>
    </>
  );
}

export default UserNotifications;
