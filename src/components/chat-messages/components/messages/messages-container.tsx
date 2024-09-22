import AllMessages from "./components/all-messages";
import ChatMessages from "./components/chat-messages";
import NewMessage from "./components/new-messages";
import verifyUserSession from "@/app/lib/dal";

async function MessagesContainer() {
  const user = await verifyUserSession();
  //TODO: fix types on component props
  return (
    <div className="h-full overflow-y-auto scroll-smooth">
      <ChatMessages user={user} />
    </div>
  );
}

export default MessagesContainer;
