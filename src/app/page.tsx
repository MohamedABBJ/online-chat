import ChatContainer from "@/components/chat-container";
import ChatIDStore from "@/components/chat-id-store";
import Dialogs from "@/components/dialogs/dialogs";
import UserSessionProps from "@/interfaces/user-session-props";
import verifyUserSession from "./lib/dal";

export default async function Home({ chat_id }: { chat_id: string }) {
  const session: UserSessionProps =
    (await verifyUserSession()) as UserSessionProps;
  console.log(chat_id);

  return (
    <div className="flex h-svh w-full items-center justify-center border-2">
      <ChatContainer chat_id={chat_id} />
      <ChatIDStore user_id={session?.user.id!} chat_id={chat_id} />
      <Dialogs session={session} />
    </div>
  );
}

/*
 */
