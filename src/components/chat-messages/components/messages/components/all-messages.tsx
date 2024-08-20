import getMesagesQuery from "@/db/get-messages-query";
import MessageElement from "./message-element";

async function AllMessages() {
  const getAllMessages = await getMesagesQuery();

  return (
    <>
      {getAllMessages?.messages.map((element) => (
        <MessageElement message={element.message as string} key={element.id} />
      ))}
    </>
  );
}

export default AllMessages;
