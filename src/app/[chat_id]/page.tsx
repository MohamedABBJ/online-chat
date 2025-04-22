import privateChatIDQuery from "@/db/private-chat-id-query";
import UserSessionProps from "@/interfaces/user-session-props";
import { redirect } from "next/navigation";
import verifyUserSession from "../lib/dal";
import Home from "../page";

async function Page({ params }: { params: { chat_id: string } }) {
  const session: UserSessionProps =
    (await verifyUserSession()) as UserSessionProps;

  const checkPrivateChat =
    session &&
    (await privateChatIDQuery({
      chat_id: params.chat_id,
      user_id: session.user?.id as string,
    }));

  !checkPrivateChat && redirect("/");

  return (
    <>
      <Home chat_id={params.chat_id} />
    </>
  );
}

export default Page;
