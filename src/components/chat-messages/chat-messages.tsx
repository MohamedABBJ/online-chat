import Error from "@/app/error";
import verifyUserSession from "@/app/lib/dal";
import getMesagesQuery from "@/db/get-messages-query";
import UserSessionProps from "@/interfaces/user-session-props";
import { ErrorBoundary } from "react-error-boundary";
import MessagesContainer from "./components/messages/messages-container";
import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";

async function Chat({ chat_id }: { chat_id: string }) {
  const session: UserSessionProps =
    (await verifyUserSession()) as UserSessionProps;

  const getChatMessages = () => {
    return getMesagesQuery({
      chat_id: "",
    });
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <TopBarContainer session={session} />
      <ErrorBoundary fallback={<Error />}>
        <MessagesContainer
          getChatMessages={getChatMessages()}
          chat_id={chat_id}
          session={session}
        />
      </ErrorBoundary>
      <ReplyContainer imageMessage={{ view: false }} session={session} />
    </div>
  );
}

export default Chat;
