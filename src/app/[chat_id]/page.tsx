import privateChatIDQuery from "@/db/private-chat-id-query";
import verifyUserSession from "../lib/dal";
import Home from "../page";

async function Page({ params }: { params: { chat_id: string } }) {
  const user = await verifyUserSession();
  const checkPrivateChat = await privateChatIDQuery({
    chat_id: params.chat_id,
    user_id: user?.userId,
  });

  //need to place two type of errors here a 404 and a 401
  return <>{checkPrivateChat ? <Home chat_id={params.chat_id} /> : null}</>;
}

export default Page;
