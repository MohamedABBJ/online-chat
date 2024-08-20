"use client";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { Check } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function SendMessage() {
  const { setOpen } = userDialogLoginStore();
  return (
    <IconButton
      onClick={() => userDialogLoginHandler({ setOpen: setOpen }).handleOpen()}
    >
      <Check />
    </IconButton>
  );
}

export default SendMessage;
