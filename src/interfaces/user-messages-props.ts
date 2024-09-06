interface UserMessageProps {
  user_type: {
    type: "oAuthUser" | "Guest";
  };
  id: number;
  user_id: string | null;
  messageType: "message" | "reply";
  message: string | null;
}

export default UserMessageProps;
