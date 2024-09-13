import ReplyContainer from "./components/reply-container";
import TopBarContainer from "./components/top-bar/top-bar-container";
import verifyUserSession from "@/app/lib/dal";
import MessagesContainer from "./components/messages/messages-container";

async function ChatMessages() {
  const checkUser = await verifyUserSession();
  //TODO: Fix problem with type
  return (
    <div className="flex h-full flex-col justify-between">
      <TopBarContainer userLoggedIn={checkUser} />
      <MessagesContainer />
      <ReplyContainer userLoggedIn={checkUser} />
    </div>
  );
}

export default ChatMessages;
