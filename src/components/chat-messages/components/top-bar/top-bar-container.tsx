"use client";
import UserMenu from "@/components/user-avatar/user-menu";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import UserSessionProps from "@/interfaces/user-session-props";
import showFriendsListStore from "@/store/mobile/show-friends-list-store";
import SearchBar from "./components/search-bar";

function TopBarContainer({ session }: { session: UserSessionProps }) {
  const { show, setShow } = showFriendsListStore();
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black pl-16">
      <input
        className="md:hidden"
        type="checkbox"
        checked={show}
        onClick={(event) => setShow(event.currentTarget.checked)}
      />
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
