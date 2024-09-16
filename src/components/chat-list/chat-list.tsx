import getUserFriendsQuery from "@/db/get-user-friends-query";
import verifyUserSession from "@/app/lib/dal";
import ChatListContent from "./components/chat-list-content";

async function ChatList() {
  return (
    <div className="flex h-full flex-col">
      <ChatListContent />
    </div>
  );
}

export default ChatList;
