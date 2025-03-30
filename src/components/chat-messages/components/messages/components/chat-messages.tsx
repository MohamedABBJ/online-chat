import Loading from "@/app/loading";
import UserSessionProps from "@/interfaces/user-session-props";
import dynamic from "next/dynamic";
import NewMessage from "./new-messages";

const AllMessages = dynamic(() => import("./all-messages"), {
  ssr: false,
  loading: () => <Loading />,
});

interface Test {
  messages: {
    user_details: {
      id: string;
      name: string | null;
      type: "oAuthUser" | "Guest" | null;
      email: string | null;
      image: string | null;
    };
    messageReplyData: {
      id: number;
      user_id: string | null;
      message: string | null;
      status: "sent" | "deleted";
      reply: string | null;
    } | null;
    id: number;
    user_id: string | null;
    message: string | null;
    status: "sent" | "deleted";
    reply: string | null;
  }[];
}

function ChatMessages({
  session,
  chat_id,
  messages,
}: {
  session: UserSessionProps;
  chat_id: string;
  messages: Test;
}) {
  return (
    <>
      <AllMessages messages={messages} session={session} chatID={chat_id} />
      <NewMessage session={session} chatID={chat_id} />
    </>
  );
}

export default ChatMessages;
