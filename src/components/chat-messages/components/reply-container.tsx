import { Check } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Input } from "@mui/material";

function ReplyContainer() {
  return (
    <Box className="mb-4 flex h-[20%] w-11/12">
      <Box className="w-full rounded-xl border border-black">
        <Input
          placeholder="Write a reply..."
          disableUnderline
          multiline
          className="flex h-full w-full items-start"
        />
      </Box>
      <Box>
        <IconButton>
          <Check />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ReplyContainer;
