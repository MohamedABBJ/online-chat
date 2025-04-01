import ChatList from "./chat-list/chat-list";
import Chat from "./chat-messages/chat-messages";

function ChatContainer({ chat_id }: { chat_id: string }) {
  return (
    <div className="flex h-full w-full gap-10 overflow-clip">
      <div
        data-checked="true"
        className="absolute -left-full z-10 h-full w-5/6 overflow-clip rounded-tr-3xl border-r border-black bg-white has-[:checked]:bg-red-600 md:relative md:left-0 md:w-2/6"
      >
        <ChatList />
      </div>
      <div className="h-full w-full border-l border-black">
        <Chat chat_id={chat_id} />
      </div>
    </div>
  );
}

export default ChatContainer;
