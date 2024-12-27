interface UserFriends {
  friendData:
    | {
        id: string;
        name: string | null;
        email: string | null;
        image: string | null;
        type: "oAuthUser" | "Guest" | "AI" | null;
      }
    | undefined;
  user_id: string;
  id: number;
  friend_id: string;
  requestState: "pending" | "accepted" | "denied";
  chat_id: string;
}
[];
