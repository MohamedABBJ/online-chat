"use client";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LoginAsGuest from "./components/login-as-guest";

function UserLoginDialog() {
  const { open, setOpen } = userDialogLoginStore();

  return (
    <Dialog
      open={open as boolean}
      onClose={() => userDialogLoginHandler({ setOpen: setOpen }).handleClose()}
    >
      <DialogTitle>Sign Up</DialogTitle>
      <DialogActions>
        <LoginAsGuest />
      </DialogActions>
    </Dialog>
  );
}

export default UserLoginDialog;
