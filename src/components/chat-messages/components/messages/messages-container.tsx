import UserSessionProps from "@/interfaces/user-session-props";
import AllMessages from "./components/all-messages";
import ChatMessages from "./components/chat-messages";
import NewMessage from "./components/new-messages";
import verifyUserSession from "@/app/lib/dal";
import { JWTPayload } from "jose";
import { Session } from "next-auth";

async function MessagesContainer({ user }: { user: UserSessionProps }) {
  return (
    <div className="h-full overflow-y-auto scroll-smooth">
      <ChatMessages user={user} />
    </div>
  );
}

export default MessagesContainer;
