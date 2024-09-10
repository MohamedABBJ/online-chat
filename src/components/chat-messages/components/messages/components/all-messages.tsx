"use server";

import getMesagesQuery from "@/db/get-messages-query";
import MessageElement from "./message-element";

async function AllMessages({ user }: { user: object }) {
  const messagesResponse = await getMesagesQuery();
  //TODO: Fix problem with type on element.message

  return (
    <>
      {messagesResponse?.messages.map((element) => (
        <MessageElement
          messageElement={{
            ...element,
            messageType: element.user_id == user?.userID ? "message" : "reply",
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
