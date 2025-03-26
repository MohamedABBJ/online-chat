import verifyUserSession from "@/app/lib/dal";
import getMesagesQuery from "@/db/get-messages-query";
import UserSessionProps from "@/interfaces/user-session-props";
import dynamic from "next/dynamic";
import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";

const MessagesContainer = dynamic(
  () => import("./components/messages/messages-container"),
  {
    ssr: true,
    loading: () => <div>Loading...</div>,
  },
);

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
      <MessagesContainer
        getChatMessages={getChatMessages()}
        chat_id={chat_id}
        session={session}
      />
      <ReplyContainer imageMessage={{ view: false }} session={session} />
    </div>
  );
}

export default Chat;
