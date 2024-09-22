"use client";
import { useState } from "react";
import FriendsList from "./user-chat";
import UserNotifications from "./user-notifications";
import { Button } from "@/components/ui/button";

function ChatListContent() {
  const [chatListSelector, setChatListSelector] = useState<
    "chat" | "notification"
  >("chat");
  return (
    <>
      <div className="flex w-full justify-between border border-red-800">
        <Button onClick={() => setChatListSelector("chat")} className="w-1/2">
          Chats
        </Button>
        <Button
          onClick={() => setChatListSelector("notification")}
          className="w-1/2"
        >
          Notifications
        </Button>
      </div>
      {chatListSelector == "chat" ? (
        <FriendsList />
      ) : chatListSelector == "notification" ? (
        <UserNotifications />
      ) : null}
    </>
  );
}

export default ChatListContent;
