import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import SearchBar from "./components/search-bar";
import { JWTPayload } from "jose";
import UserMenu from "@/components/user-avatar/user-menu";
import UserSessionProps from "@/interfaces/user-session-props";

function TopBarContainer({ user }: { user: UserSessionProps }) {
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black pl-16">
      <SearchBar />
      {user ? (
        <UserMenu viewType="profile" />
      ) : (
        <UserLoginDialog loginMode="complete" />
      )}
    </div>
  );
}

export default TopBarContainer;
