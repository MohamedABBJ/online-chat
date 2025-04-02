"use client";
import { Button } from "@/components/ui/button";
import chatListSelectorStore from "@/store/chat-list-selector-store";
import ShowHideFriendsList from "./show-hide-friends-list";

function ChatListOptions() {
  const { setChatListSelector } = chatListSelectorStore();
  return (
    <div className="flex w-full justify-between gap-5 border border-red-800 md:gap-0">
      <Button onClick={() => setChatListSelector("chat")} className="w-1/2">
        Chats
      </Button>
      <Button
        onClick={() => setChatListSelector("notification")}
        className="w-1/2"
      >
        Notifications
      </Button>

      <ShowHideFriendsList />
    </div>
  );
}

export default ChatListOptions;
