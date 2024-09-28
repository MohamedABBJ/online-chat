"use client";
import { Button } from "@/components/ui/button";
import UserSessionProps from "@/interfaces/user-session-props";
import { useState } from "react";
import FriendsList from "./user-chat";
import UserNotifications from "./user-notifications";

function ChatListContent({ session }: { session: UserSessionProps }) {
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
        <FriendsList session={session} />
      ) : chatListSelector == "notification" ? (
        <UserNotifications session={session} />
      ) : null}
    </>
  );
}

export default ChatListContent;
