import verifyUserSession from "@/app/lib/dal";
import UserSessionProps from "@/interfaces/user-session-props";
import ChatListContent from "./components/chat-list-content";

async function ChatList() {
  const session: UserSessionProps =
    (await verifyUserSession()) as UserSessionProps;

  return (
    <div className="flex h-full flex-col">
      <ChatListContent session={session} />
    </div>
  );
}

export default ChatList;
