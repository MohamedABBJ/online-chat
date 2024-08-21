"use client";
import { Box, Typography } from "@mui/material";

function MessageElement(props: { message: string }) {
  return (
    <Box className="">
      <Typography>{props.message}</Typography>
    </Box>
  );
}

export default MessageElement;
