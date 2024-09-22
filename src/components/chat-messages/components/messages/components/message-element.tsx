"use client";
import UserAvatar from "@/components/user-avatar/user-avatar";
import UserMenu from "@/components/user-avatar/user-menu";
import UserMessageProps from "@/interfaces/user-messages-props";

function MessageElement({
  messageElement,
}: {
  messageElement: UserMessageProps;
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
      <UserMenu viewType="chat" messageElement={messageElement} />
      <p
        className={`ml-2 flex items-center rounded-xl border border-black p-2 ${messageType}`}
      >
        {messageElement.message}
      </p>
    </div>
  );
}

export default MessageElement;
