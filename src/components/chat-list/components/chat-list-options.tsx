"use client";
import { Button } from "@/components/ui/button";
import chatListSelectorStore from "@/store/chat-list-selector-store";
import ShowHideFriendsList from "./show-hide-friends-list";

function ChatListOptions() {
  const { setChatListSelector } = chatListSelectorStore();
  return (
    <div className="flex w-full items-center justify-between border border-red-800">
      <Button onClick={() => setChatListSelector("chat")} className="w-1/2">
        Chats
      </Button>
      <Button
        onClick={() => setChatListSelector("notification")}
        className="w-1/2"
      >
        Notifications
      </Button>
      <div className="pl-4 md:hidden">
        <ShowHideFriendsList />
      </div>
    </div>
  );
}

export default ChatListOptions;
