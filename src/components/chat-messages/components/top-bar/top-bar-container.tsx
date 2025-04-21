"use client";
import ShowHideFriendsList from "@/components/chat-list/components/show-hide-friends-list";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar/user-avatar";
import UserMenu from "@/components/user-avatar/user-menu";
import UserSessionProps from "@/interfaces/user-session-props";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import SearchBar from "./components/search-bar";

function TopBarContainer({ session }: { session: UserSessionProps }) {
  const { setOpenLoginDialogProps } = userDialogLoginStore();
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black px-3 md:pl-16">
      <ShowHideFriendsList />
      <SearchBar />
      {session ? (
        <UserMenu session={session} viewType="profile" />
      ) : (
        <Button
          variant={"ghost"}
          className="hover:bg-transparent"
          onClick={() => {
            setOpenLoginDialogProps({ open: true, loginMode: "allOptions" });
          }}
        >
          <UserAvatar />
        </Button>
      )}
    </div>
  );
}

export default TopBarContainer;
