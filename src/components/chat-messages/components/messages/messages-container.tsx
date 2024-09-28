import UserSessionProps from "@/interfaces/user-session-props";
import ChatMessages from "./components/chat-messages";

async function MessagesContainer({ session }: { session: UserSessionProps }) {
  return (
    <div className="h-full overflow-y-auto scroll-smooth">
      <ChatMessages session={session} />
    </div>
  );
}

export default MessagesContainer;
