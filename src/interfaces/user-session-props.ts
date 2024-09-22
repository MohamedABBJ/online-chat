import { JWTPayload } from "jose";
import { User } from "next-auth";

interface UserSessionProps {
  data: JWTPayload | User | null | undefined;
}

export default UserSessionProps;
