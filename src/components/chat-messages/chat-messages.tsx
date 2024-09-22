import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";
import verifyUserSession from "@/app/lib/dal";
import MessagesContainer from "./components/messages/messages-container";
import UserSessionProps from "@/interfaces/user-session-props";

async function Chat() {
  const user: UserSessionProps = { data: await verifyUserSession() };

  return (
    <div className="flex h-full flex-col justify-between">
      <TopBarContainer user={user} />
      <MessagesContainer user={user} />
      <ReplyContainer user={user} />
    </div>
  );
}

export default Chat;
