import { Box } from "@mui/material";

import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";
import verifyUserSession from "@/app/lib/dal";
import MessagesContainer from "./components/messages/messages-container";

async function ChatMessages() {
  const test = await verifyUserSession();
  return (
    <Box className="flex h-full flex-col justify-between">
      <TopBarContainer />
      <MessagesContainer />
      <ReplyContainer userLoggedIn={test} />
    </Box>
  );
}

export default ChatMessages;
