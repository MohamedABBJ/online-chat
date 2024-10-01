import { User } from "next-auth";

interface UserSessionProps {
  sessionToken: string;
  expires: string;
  user: User & { type: "oAuthUser" | "Guest" };
}

export default UserSessionProps;
