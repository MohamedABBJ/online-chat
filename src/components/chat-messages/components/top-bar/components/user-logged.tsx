import UserAvatar from "@/components/user-avatar/user-avatar";
import { JWTPayload } from "jose";

function UserLoggedIn({
  userLoggedIn,
}: {
  userLoggedIn: () => Promise<JWTPayload | null>;
}) {
  return <UserAvatar viewType="profile" />;
}

export default UserLoggedIn;
