"use client";
import verifyUserSession from "@/app/lib/dal";
import updateProfileImage from "@/db/update-profile-image";
import UserMessageProps from "@/interfaces/user-messages-props";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import logoutHandler from "@/utils/logout-handler";
import { UploadButton } from "@/utils/uploadthing";
import { Avatar, Badge, Box, Button, Typography } from "@mui/material";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

function UserMenuElements({
  viewType,
  messageElement,
  setAnchorEl,
}: {
  viewType: "chat" | "profile";
  messageElement?: UserMessageProps;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
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
          <Button
            onClick={() => {
              logoutHandler({ logoutType: userData?.user?.type });
              setAnchorEl(null);
            }}
          >
            Log outt
          </Button>
        </Box>
      ) : null}

      <Box className="relative flex flex-col items-center">
        <UploadButton
          className="-800 absolute z-10 ut-button:w-full ut-button:bg-transparent ut-button:text-transparent ut-button:focus-within:hidden ut-button:focus:border ut-allowed-content:hidden"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <Box>
          <Badge
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            overlap="circular"
            badgeContent=" "
            variant="dot"
            className="[&_.MuiBadge-badge]:bg-green-600"
          >
            <Avatar src="" />
          </Badge>
        </Box>
      </Box>

      <Typography>
        {viewType == "profile"
          ? userData?.user?.name
          : messageElement?.user_details?.name}
      </Typography>
      {userData && userData.user?.type == "Guest" && viewType == "profile" ? (
        <Button onClick={() => setOpen(true)}>Login with auth</Button>
      ) : null}
      {viewType == "chat" &&
      messageElement?.user_type?.type == "oAuthUser" &&
      userData?.user?.id != messageElement.id ? (
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
