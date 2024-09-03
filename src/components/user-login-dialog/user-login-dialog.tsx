"use client";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LoginAsGuest from "./components/login-as-guest";
import LoginWithGithub from "./components/login-with-github";
import LoginWithGoogle from "./components/login-with-google";

function UserLoginDialog({ userData }: { userData: object }) {
  const { open, setOpen } = userDialogLoginStore();
  //TODO fix type
  return (
    <Dialog
      open={open as boolean}
      onClose={() => userDialogLoginHandler({ setOpen: setOpen }).handleClose()}
      className="flex flex-col text-center"
    >
      <DialogTitle>Sign Up</DialogTitle>
      <DialogActions className="flex flex-col">
        <LoginWithGoogle />
        <LoginWithGithub />
        {(userData && userData.user.type != "Guest") || userData == null ? (
          <LoginAsGuest />
        ) : null}
      </DialogActions>
    </Dialog>
  );
}

export default UserLoginDialog;
