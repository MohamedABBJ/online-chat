import { Box } from "@mui/material";

import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";
import MessageElement from "./components/messages/components/message-element";
import verifyUserSession from "@/app/lib/dal";

async function ChatMessages() {
  const test = await verifyUserSession();
  return (
    <Box className="flex h-full flex-col justify-between">
      <TopBarContainer />
      <MessageElement />
      <ReplyContainer userLoggedIn={test} />
    </Box>
  );
}

export default ChatMessages;
