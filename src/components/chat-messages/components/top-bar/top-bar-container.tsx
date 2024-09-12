"use client";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import SearchBar from "./components/search-bar";
import UserLoggedIn from "./components/user-logged";
import UserNotLoggedIn from "./components/user-not-logged";
import { JWTPayload } from "jose";

function TopBarContainer({
  userLoggedIn,
}: {
  userLoggedIn: () => Promise<JWTPayload | null>;
}) {
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black pl-16">
      <SearchBar />
      {(userLoggedIn as () => Promise<JWTPayload | null>) ? (
        <UserLoggedIn userLoggedIn={userLoggedIn} />
      ) : (
        <UserLoginDialog />
      )}
    </div>
  );
}

export default TopBarContainer;
