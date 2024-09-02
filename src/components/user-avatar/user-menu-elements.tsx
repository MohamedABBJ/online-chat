"use client";
import verifyUserSession from "@/app/lib/dal";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import { Avatar, Badge, Box, Button, Typography } from "@mui/material";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

function UserMenuElements({ viewType }: { viewType: "chat" | "profile" }) {
  const { setOpen } = userDialogLoginStore();
  const [userData, setUserData] = useState<Session | null>();

  useEffect(() => {
    const getUserData = async () => {
      setUserData(await verifyUserSession());
    };
    getUserData();
  }, []);

  return (
    <Box className="flex w-48 flex-col items-center gap-2">
      {viewType == "profile" ? (
        <Box className="flex w-full justify-end">
          <Button>Log out</Button>
        </Box>
      ) : null}
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
      {userData && userData.user?.type == "Guest" ? (
        <Button onClick={() => setOpen(true)}>Login with auth</Button>
      ) : null}
    </Box>
  );
}

export default UserMenuElements;
