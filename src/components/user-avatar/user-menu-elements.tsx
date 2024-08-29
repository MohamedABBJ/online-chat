"use client";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import { Avatar, Badge, Box, Button, Typography } from "@mui/material";

function UserMenuElements() {
  const { setOpen } = userDialogLoginStore();
  return (
    <Box className="flex w-48 flex-col items-center gap-2">
      <Box className="flex w-full justify-end">
        <Button>Log out</Button>
      </Box>
      <Badge
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        overlap="circular"
        badgeContent=" "
        variant="dot"
        className="[&_.MuiBadge-badge]:bg-green-600"
      >
        <Avatar />
      </Badge>
      <Typography>UserName</Typography>
      <Button onClick={() => setOpen(true)}>Login with auth</Button>
    </Box>
  );
}

export default UserMenuElements;
