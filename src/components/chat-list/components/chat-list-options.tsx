"use client";
import { Button } from "@/components/ui/button";
import chatListSelectorStore from "@/store/chat-list-selector-store";

function ChatListOptions() {
  const { setChatListSelector } = chatListSelectorStore();
  return (
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
  );
}

export default ChatListOptions;
