"use client";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import sendMessageQuery from "@/db/send-message-query";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { Check } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Input } from "@mui/material";
import { JWTPayload } from "jose";
import { useState } from "react";
import { io } from "socket.io-client";

const socket = io();

function ReplyContainer(props: { userLoggedIn: JWTPayload | null }) {
  const { setOpen } = userDialogLoginStore();
  const [message, setMessage] = useState("");

  const sendMessageHandler = () => {
    if (props.userLoggedIn) {
      sendMessageQuery({
        userID: props.userLoggedIn.userID as number,
        message: message,
      });
      socket.emit("newMessage", message);
    } else {
      userDialogLoginHandler({ setOpen: setOpen }).handleOpen();
    }
  };
  return (
    <Box className="mb-4 flex h-[20%] w-11/12">
      <Box className="w-full rounded-xl border border-black">
        <Input
          onChange={(event) => setMessage(event.currentTarget.value)}
          placeholder="Write a reply..."
          disableUnderline
          multiline
          className="flex h-full w-full items-start"
        />
      </Box>
      <Box>
        <IconButton onClick={sendMessageHandler}>
          <Check />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ReplyContainer;
