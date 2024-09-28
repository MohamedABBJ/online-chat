import { JWTPayload } from "jose";
import { User } from "next-auth";

interface UserProps {
  user: JWTPayload | User | null | undefined;
}

interface UserSessionProps extends UserProps {
  sessionToken: string;
  expires: string;
}

export default UserSessionProps;
