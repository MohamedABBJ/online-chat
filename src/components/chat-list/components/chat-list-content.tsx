"use client";
import { Button } from "@/components/ui/button";
import UserSessionProps from "@/interfaces/user-session-props";
import chatListSelectorStore from "@/store/chat-list-selector-store";
import PublicChatButton from "./public-chat-button";
import FriendsList from "./user-chat";
import UserNotifications from "./user-notifications";

function ChatListContent({ session }: { session: UserSessionProps }) {
  const { chatListSelector, setChatListSelector } = chatListSelectorStore();

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
        <div className="flex h-full flex-col items-start gap-4 overflow-y-auto p-4">
          <PublicChatButton />
          <FriendsList session={session} />
        </div>
      ) : chatListSelector == "notification" ? (
        <UserNotifications session={session} />
      ) : null}
    </>
  );
}

export default ChatListContent;
