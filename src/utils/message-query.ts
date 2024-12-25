import sendMessageQuery from "@/db/send-message-query";

const messageQuery = async ({
  messageData,
  replyID,
  userID,
  image,
  chatID,
}: {
  messageData: string;
  replyID: string | null;
  userID: string;
  image: string | null;
  chatID: string;
}) => {
  return await sendMessageQuery({
    chat_id: chatID,
    userID: userID,
    message: messageData,
    message_id: replyID,
    image: image,
  });
};

export default messageQuery;
