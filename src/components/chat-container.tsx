import { Box, Button } from "@mui/material";
import ChatList from "./chat-list/chat-list";
import ChatMessages from "./chat-messages/chat-messages";

function ChatContainer() {
  return (
    <Box className="flex h-[90%] w-[95%] gap-10 rounded-3xl border border-black">
      <Box className="h-full w-2/6 rounded-tr-3xl border-r border-black">
        <ChatList />
      </Box>
      <Box className="h-full w-full border-l border-black">
        <ChatMessages />
      </Box>
    </Box>
  );
}

export default ChatContainer;
