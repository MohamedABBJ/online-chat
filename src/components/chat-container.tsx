import ChatList from "./chat-list/chat-list";
import ChatMessages from "./chat-messages/chat-messages";

function ChatContainer() {
  return (
    <div className="flex h-[90%] w-[95%] gap-10 overflow-clip rounded-3xl border border-black">
      <div className="h-full w-2/6 overflow-clip rounded-tr-3xl border-r border-black">
        <ChatList />
      </div>
      <div className="h-full w-full border-l border-black">
        <ChatMessages />
      </div>
    </div>
  );
}

export default ChatContainer;
