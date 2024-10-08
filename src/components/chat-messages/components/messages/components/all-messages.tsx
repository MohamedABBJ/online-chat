"use client";

import UserSessionProps from "@/interfaces/user-session-props";
import MessageElement from "./message-element";

//TODO: fix this type, shouldn't be here.
interface Test {
  messages: {
    user_details: {
      id: string;
      name: string | null;
      type: "oAuthUser" | "Guest" | null;
      email: string | null;
      image: string | null;
    };
    id: number;
    user_id: string | null;
    message: string | null;
    status: "sent" | "deleted";
  }[];
}

function AllMessages({
  session,
  messages,
  chatID,
}: {
  session: UserSessionProps;
  messages: Test;
  chatID: string;
}) {
  //TODO: Fix problem with type on element.message

  return (
    <>
      {messages?.messages.map((element) => (
        <MessageElement
          messageElement={{
            ...element,
            messageType:
              element.user_id == session?.user?.id ? "message" : "reply",
            chat_id: chatID,
          }}
          key={element.id}
        />
      ))}
    </>
  );
}
export default AllMessages;

/*
 {messages.map((element) => (
        <MessageElement message={element.message as string} key={element.id} />
      ))}
*/
