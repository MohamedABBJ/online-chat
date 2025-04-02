import ShowHideFriendsList from "@/components/chat-list/components/show-hide-friends-list";
import UserMenu from "@/components/user-avatar/user-menu";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import UserSessionProps from "@/interfaces/user-session-props";
import SearchBar from "./components/search-bar";

function TopBarContainer({ session }: { session: UserSessionProps }) {
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black pl-16">
      <ShowHideFriendsList />
      <SearchBar />
      {session ? (
        <UserMenu session={session} viewType="profile" />
      ) : (
        <UserLoginDialog loginMode="complete" />
      )}
    </div>
  );
}

export default TopBarContainer;
