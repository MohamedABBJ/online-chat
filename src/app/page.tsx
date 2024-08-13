import ChatContainer from "@/components/chat-container";
import UserLoginDialog from "@/components/user-login-dialog";
import sendMessageQuery from "@/db/send-message-query";

export default async function Home() {
  return (
    <main className="flex h-svh w-full items-center justify-center border-2 border-red-700">
      <ChatContainer />
      <UserLoginDialog />
    </main>
  );
}
