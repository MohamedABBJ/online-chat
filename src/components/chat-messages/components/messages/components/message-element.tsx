"use client";
import UserMenu from "@/components/user-avatar/user-menu";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";

function MessageElement({
  messageElement,
  session,
}: {
  messageElement: UserMessageProps;
  session?: UserSessionProps;
}) {
  const messageStyle = "bg-indigo-600 text-white";
  const replyStyle = "bg-transparent text-black";

  const messageType =
    messageElement.messageType == "message"
      ? messageStyle
      : messageElement.messageType == "reply"
        ? replyStyle
        : "";

  return (
    <div className={`my-4 ml-2 flex`}>
      <UserMenu
        viewType="chat"
        session={session}
        messageElement={messageElement}
      />
      <div
        className={`ml-2 flex items-center rounded-xl border border-black p-4 ${messageType}`}
      >
        <p>{messageElement.message}</p>
        <button>{`↓`}</button>
      </div>
    </div>
  );
}

export default MessageElement;
