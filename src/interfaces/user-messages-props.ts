interface UserMessageProps {
  user_details: {
    id: string;
    name: string | null;
    type: any;
    email: string | null;
    image: string | null;
  };
  id: number;
  user_id: string | null;
  messageType: "message" | "reply";
  message: string | null;
  chat_id: string;
  reply: number | "none";
}
[];

export default UserMessageProps;
