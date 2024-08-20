import { Box } from "@mui/material";
import SearchBar from "./components/search-bar";
import verifyUserSession from "@/app/lib/dal";
import UserLoggedIn from "./components/user-logged";
import UserNotLoggedIn from "./components/user-not-logged";

async function TopBarContainer() {
  const userLoggedInState = await verifyUserSession();

  return (
    <Box className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black pl-16">
      <SearchBar />
      {userLoggedInState ? <UserLoggedIn /> : <UserNotLoggedIn />}
    </Box>
  );
}

export default TopBarContainer;
