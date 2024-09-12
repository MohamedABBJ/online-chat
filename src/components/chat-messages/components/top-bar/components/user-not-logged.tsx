"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import userDialogLoginStore from "@/store/user-login-dialog-store";

function UserNotLoggedIn() {
  const { setOpen } = userDialogLoginStore();
  return (
    <Button onClick={() => setOpen(true)}>
      <Avatar />
    </Button>
  );
}

export default UserNotLoggedIn;
