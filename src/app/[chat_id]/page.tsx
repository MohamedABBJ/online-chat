import privateChatIDQuery from "@/db/private-chat-id-query";
import UserSessionProps from "@/interfaces/user-session-props";
import verifyUserSession from "../lib/dal";
import Home from "../page";

async function Page({ params }: { params: { chat_id: string } }) {
  const session: UserSessionProps =
    (await verifyUserSession()) as UserSessionProps;
  const checkPrivateChat = await privateChatIDQuery({
    chat_id: params.chat_id,
    user_id: session.user?.id as string,
  });
  //need to place two type of errors here a 404 and a 401
  return <>{checkPrivateChat ? <Home chat_id={params.chat_id} /> : null}</>;
}

export default Page;
