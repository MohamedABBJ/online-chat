"use client";

import userDialogLoginStore from "@/store/user-login-dialog-store";
import { Avatar, Box, Button, IconButton } from "@mui/material";

function UserNotLoggedIn() {
  const { setOpen } = userDialogLoginStore();
  return (
    <IconButton onClick={() => setOpen(true)}>
      <Avatar />
    </IconButton>
  );
}

export default UserNotLoggedIn;
