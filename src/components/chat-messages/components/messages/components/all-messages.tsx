"use server";

import getMesagesQuery from "@/db/get-messages-query";
import MessageElement from "./message-element";

async function AllMessages() {
  const messagesResponse = await getMesagesQuery();

  //TODO: Fix problem with type on element.message
  return (
    <>
      {messagesResponse?.messages.map((element) => (
        <MessageElement message={element.message} key={element.id} />
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
