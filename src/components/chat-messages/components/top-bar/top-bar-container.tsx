import { Box } from "@mui/material";
import User from "./components/user";
import SearchBar from "./components/search-bar";

function TopBarContainer() {
  return (
    <Box className="flex h-16 w-full items-center justify-between rounded-bl-3xl border-b border-l border-black pl-16">
      <SearchBar />
      <User />
    </Box>
  );
}

export default TopBarContainer;
