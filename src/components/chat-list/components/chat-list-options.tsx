"use client";
import { Button } from "@/components/ui/button";
import chatListSelectorStore from "@/store/chat-list-selector-store";
import showFriendsListStore from "@/store/mobile/show-friends-list-store";

function ChatListOptions() {
  const { setChatListSelector } = chatListSelectorStore();
  const { show, setShow } = showFriendsListStore();
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

      <input
        type="checkbox"
        onClick={(event) => setShow(event.currentTarget.checked)}
        checked={show}
      />
    </div>
  );
}

export default ChatListOptions;
