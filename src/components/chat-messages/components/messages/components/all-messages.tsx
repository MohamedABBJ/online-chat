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
<<<<<<< HEAD
          messageElement={{
            ...element,
            messageType: element.user_id == user?.userID ? "message" : "reply",
          }}
=======
          type={element.user_id == user?.userID ? "message" : "reply"}
          message={element.message}
          role={element.user_type && element.user_type.type}
          userMessageID={element.user_id}
>>>>>>> 256325f2b812ad5479d986f75d8b9e60354c34a8
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
