"use client";
import UserMenu from "@/components/user-avatar/user-menu";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
import MoreOptions from "./more-options";

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
    <div className={`my-4 ml-2 flex items-center`}>
      <UserMenu
        viewType="chat"
        session={session}
        messageElement={messageElement}
      />
      <div
        className={`group relative ml-2 flex items-center rounded-xl border border-black px-8 py-6 ${messageType}`}
      >
        <p>{messageElement.message}</p>
        <MoreOptions messageElement={messageElement} />
      </div>
    </div>
  );
}

export default MessageElement;
