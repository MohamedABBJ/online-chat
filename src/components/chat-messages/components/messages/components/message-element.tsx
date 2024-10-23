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
      <div className="relative ml-2 flex h-full flex-col items-center">
        {messageElement.reply != "none" ? (
          <p className="h-full w-full border-l border-r border-t border-green-950 pb-2">
            test
          </p>
        ) : null}
        <div
          className={`group relative -mt-2 flex w-full items-center rounded-xl border border-black px-8 py-6 ${messageType}`}
        >
          <p>{messageElement.message}</p>
          <MoreOptions messageElement={messageElement} />
        </div>
      </div>
    </div>
  );
}

export default MessageElement;
