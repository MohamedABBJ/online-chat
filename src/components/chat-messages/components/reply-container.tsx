"use client";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import sendMessageQuery from "@/db/send-message-query";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { Check } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Input } from "@mui/material";
import { JWTPayload } from "jose";
import { useState } from "react";

function ReplyContainer(props: { userLoggedIn: JWTPayload | null }) {
  const [replyMessage, setReplyMessage] = useState("");
  const { setOpen } = userDialogLoginStore();
  console.log(props.userLoggedIn);

  return (
    <Box className="mb-4 flex h-[20%] w-11/12">
      <Box className="w-full rounded-xl border border-black">
        <Input
          onChange={(event) => setReplyMessage(event.currentTarget.value)}
          placeholder="Write a reply..."
          disableUnderline
          multiline
          className="flex h-full w-full items-start"
        />
      </Box>
      <Box>
        <IconButton
          onClick={() =>
            props.userLoggedIn
              ? sendMessageQuery()
              : userDialogLoginHandler({ setOpen: setOpen }).handleOpen()
          }
        >
          <Check />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ReplyContainer;
