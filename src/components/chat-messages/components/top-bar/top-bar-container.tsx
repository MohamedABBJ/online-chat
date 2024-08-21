"use client";
import { Box } from "@mui/material";
import SearchBar from "./components/search-bar";
import UserLoggedIn from "./components/user-logged";
import UserNotLoggedIn from "./components/user-not-logged";
import { JWTPayload } from "jose";

function TopBarContainer(props: {
  userLoggedIn: () => Promise<JWTPayload | null>;
}) {
  return (
    <Box className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black pl-16">
      <SearchBar />
      {(props.userLoggedIn as () => Promise<JWTPayload | null>) ? (
        <UserLoggedIn />
      ) : (
        <UserNotLoggedIn />
      )}
    </Box>
  );
}

export default TopBarContainer;
