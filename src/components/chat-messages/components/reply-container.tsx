"use client";
import { socket } from "@/app/socket";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import sendMessageQuery from "@/db/send-message-query";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { Check } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Input } from "@mui/material";
import { JWTPayload } from "jose";
import { useState } from "react";
import { io } from "socket.io-client";

function ReplyContainer(props: {
  userLoggedIn: () => Promise<JWTPayload | null>;
}) {
  const { setOpen } = userDialogLoginStore();
  const [message, setMessage] = useState("");

  const sendMessageHandler = () => {
    //TODO: Fix problem with type
    if (props.userLoggedIn as () => Promise<JWTPayload | null>) {
      const messageData = {
        userID: props.userLoggedIn.userID as number,
        message: message,
      };
      sendMessageQuery(messageData);
      socket.emit("newMessage", messageData);
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
