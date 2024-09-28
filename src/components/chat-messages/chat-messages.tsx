import verifyUserSession from "@/app/lib/dal";
import UserSessionProps from "@/interfaces/user-session-props";
import MessagesContainer from "./components/messages/messages-container";
import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";

async function Chat() {
  const session: UserSessionProps =
    (await verifyUserSession()) as UserSessionProps;

  return (
    <div className="flex h-full flex-col justify-between">
      <TopBarContainer session={session} />
      <MessagesContainer session={session} />
      <ReplyContainer session={session} />
    </div>
  );
}

export default Chat;
