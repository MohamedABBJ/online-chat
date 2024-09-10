"use client";
import { useState } from "react";
import FriendsList from "./user-chat";
import UserNotifications from "./user-notifications";
import { Box, Button } from "@mui/material";

function ChatListContent() {
  const [chatListSelector, setChatListSelector] = useState<
    "chat" | "notification"
  >("chat");
  return (
    <>
      <Box className="flex w-full justify-between border border-red-800">
        <Button onClick={() => setChatListSelector("chat")} className="w-1/2">
          Chats
        </Button>
        <Button
          onClick={() => setChatListSelector("notification")}
          className="w-1/2"
        >
          Notifications
        </Button>
      </Box>
      {chatListSelector == "chat" ? (
        <FriendsList />
      ) : chatListSelector == "notification" ? (
        <UserNotifications />
      ) : null}
    </>
  );
}

export default ChatListContent;
