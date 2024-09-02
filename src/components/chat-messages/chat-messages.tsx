"use server";

import { Box } from "@mui/material";
import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";
import verifyUserSession from "@/app/lib/dal";
import MessagesContainer from "./components/messages/messages-container";

async function ChatMessages() {
  const checkUser = await verifyUserSession();
  console.log(checkUser);
  //TODO: Fix problem with type
  return (
    <Box className="flex h-full flex-col justify-between">
      <TopBarContainer userLoggedIn={checkUser} />
      <MessagesContainer />
      <ReplyContainer userLoggedIn={checkUser} />
    </Box>
  );
}

export default ChatMessages;
