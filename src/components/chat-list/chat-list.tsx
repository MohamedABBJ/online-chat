import { Box } from "@mui/material";
import GroupChatsButton from "./components/group-chats-button";
import UserChat from "./components/user-chat";

function ChatList() {
  return (
    <Box className="flex flex-col">
      <GroupChatsButton />
      <UserChat />
    </Box>
  );
}

export default ChatList;
