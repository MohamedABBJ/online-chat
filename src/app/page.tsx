import ChatContainer from "@/components/chat-container";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import verifyUserSession from "./lib/dal";
import ChatIDStore from "@/components/chat-id-store";
import { createDropdownMenuScope } from "@radix-ui/react-dropdown-menu";

export default async function Home({ chat_id }: { chat_id: string }) {
  return (
    <div className="flex h-svh w-full items-center justify-center border-2 border-red-700">
      <ChatContainer />
      <ChatIDStore chat_id={chat_id} />
    </div>
  );
}

/*
 */
