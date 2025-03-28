"use client";
import UserSessionProps from "@/interfaces/user-session-props";
import chatListSelectorStore from "@/store/chat-list-selector-store";
import { Usable, use } from "react";
import PublicChatButton from "./public-chat-button";
import FriendsList from "./user-chat";
import UserNotifications from "./user-notifications";

function ChatListFriendsNotifications({
  session,
  getUserFriendsFun,
}: {
  session: UserSessionProps;
  getUserFriendsFun: Usable<unknown>;
}) {
  const { chatListSelector } = chatListSelectorStore();
  const userFriends = use(getUserFriendsFun);

  return (
    <>
      {chatListSelector == "chat" ? (
        <div className="flex h-full flex-col items-start overflow-y-auto p-4">
          <div className="flex w-full flex-col gap-4">
            <PublicChatButton />
            <FriendsList userFriends={userFriends} session={session} />
          </div>
        </div>
      ) : chatListSelector == "notification" ? (
        <UserNotifications session={session} />
      ) : null}
    </>
  );
}

export default ChatListFriendsNotifications;
