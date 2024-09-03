"use client";
import verifyUserSession from "@/app/lib/dal";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import { Avatar, Badge, Box, Button, Typography } from "@mui/material";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

function UserMenuElements({
  viewType,
  role,
}: {
  viewType: "chat" | "profile";
  role: "oAuthUser" | "Guest";
}) {
  const { setOpen } = userDialogLoginStore();
  const [userData, setUserData] = useState<Session | null>();
  //TODO: Fix errors here
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
      {userData && userData.user?.type == "Guest" && viewType == "profile" ? (
        <Button onClick={() => setOpen(true)}>Login with auth</Button>
      ) : null}
      {viewType == "chat" && role == "oAuthUser" ? (
        <Button
          onClick={() =>
            userData?.user?.type == "Guest"
              ? setOpen(true)
              : userData?.user?.type == "oAuthUser"
                ? alert("Adding user... (implementation W.I.P)")
                : alert("An error happened, please contact admin")
          }
        >
          Add user
        </Button>
      ) : null}
    </Box>
  );
}

export default UserMenuElements;
