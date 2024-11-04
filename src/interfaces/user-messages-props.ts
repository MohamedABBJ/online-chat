interface UserMessageProps {
  user_details: {
    id: string;
    name: string | null;
    type: any;
    email: string | null;
    image: string | null;
  };
  messageReplyData: {
    id: number;
    user_id: string | null;
    message: string | null;
    status: "sent" | "deleted";
    reply: string | null;
    image: string | null;
  } | null;
  id: number;
  user_id: string | null;
  messageType: "message" | "reply";
  message: string | null;
  chat_id: string;
  reply: string | null;
  image: string | null;
}
[];

export default UserMessageProps;
