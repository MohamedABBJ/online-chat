"use client";

import { Box } from "@mui/material";
import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";
import verifyUserSession from "@/app/lib/dal";
import MessagesContainer from "./components/messages/messages-container";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { socket } from "@/app/socket";

function ChatMessages() {
  const userData = async () => {
    const checkUser = await verifyUserSession();
    return checkUser;
  };

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Box className="flex h-full flex-col justify-between">
      <TopBarContainer userLoggedIn={userData} />
      <MessagesContainer />
      <ReplyContainer userLoggedIn={userData} />
    </Box>
  );
}

export default ChatMessages;
