import { Box, Button } from "@mui/material";
import GroupChatsButton from "./components/group-chats-button";
import getUserFriendsQuery from "@/db/get-user-friends-query";
import verifyUserSession from "@/app/lib/dal";
import FriendsList from "./components/user-chat";
import UserNotifications from "./components/user-notifications";
import ChatListContent from "./components/chat-list-content";

async function ChatList() {
  const currentUserData = await verifyUserSession();
  const userFriends =
    currentUserData && (await getUserFriendsQuery(currentUserData?.user?.id));

  return (
    <Box className="flex h-full flex-col">
      <ChatListContent />
    </Box>
  );
}

export default ChatList;
