import { Box, Input } from "@mui/material";

function SearchBar() {
  return (
    <Input
      className="h-10 w-[28rem] rounded-xl bg-indigo-100"
      disableUnderline
      placeholder="Search"
    />
  );
}

export default SearchBar;
