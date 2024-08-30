"use client";

import oAuthLoginHandler from "@/utils/oauth-login-handler";
import { Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

function LoginWithGoogle() {
  return (
    <Box className="flex">
      <form
        action={async () => {
          await oAuthLoginHandler({ method: "google" });
        }}
      >
        <Button type="submit">Login with Google</Button>
        <Google />
      </form>
    </Box>
  );
}

export default LoginWithGoogle;
