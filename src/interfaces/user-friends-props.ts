interface UserFriends {
  friendData:
    | {
        id: string;
        name: string | null;
        email: string | null;
        image: string | null;
        type: "oAuthUser" | "Guest" | null;
      }
    | undefined;
  user_id: string;
  id: number;
  friend_id: string;
  requestState: "pending" | "accepted" | "denied";
}
[];
