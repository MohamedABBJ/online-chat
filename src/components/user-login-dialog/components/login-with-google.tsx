"use client";

import userDialogLoginStore from "@/store/user-login-dialog-store";
import { Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { signIn } from "next-auth/react";

function LoginWithGoogle() {
  return (
    <Box className="flex">
      <form
        action={async () => {
          await signIn("google");
        }}
      >
        <Button type="submit">Login with Google</Button>
        <Google />
      </form>
    </Box>
  );
}

export default LoginWithGoogle;
