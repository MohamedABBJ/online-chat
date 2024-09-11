import UserAvatar from "@/components/user-avatar/user-avatar";
import { Check, Close } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";

function UserNotifications() {
  return (
    <>
      <Box className="flex h-full overflow-y-scroll p-4">
        <Box>
          <Box className="flex items-center gap-3">
            <UserAvatar viewType="chat" />
            <Box>
              <Typography>username</Typography>
              <Typography>sent you a friend request</Typography>
            </Box>
            <Box className="flex gap-2">
              <Button variant="outlined" className="min-w-0 rounded-full p-1">
                <Check />
              </Button>
              <Button
                color="error"
                variant="outlined"
                className="min-w-0 rounded-full p-1"
              >
                <Close />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default UserNotifications;
