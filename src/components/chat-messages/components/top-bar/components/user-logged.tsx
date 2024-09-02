import UserAvatar from "@/components/user-avatar/user-avatar";
import { JWTPayload } from "jose";

function UserLoggedIn() {
  return <UserAvatar viewType="profile" />;
}

export default UserLoggedIn;
