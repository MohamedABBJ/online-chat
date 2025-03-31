import ChatList from "./chat-list/chat-list";
import Chat from "./chat-messages/chat-messages";

function ChatContainer({ chat_id }: { chat_id: string }) {
  return (
    <div className="flex h-full w-full gap-10 overflow-clip">
      <div className="h-full w-2/6 overflow-clip rounded-tr-3xl border-r border-black">
        <ChatList />
      </div>
      <div className="h-full w-full border-l border-black">
        <Chat chat_id={chat_id} />
      </div>
    </div>
  );
}

export default ChatContainer;
