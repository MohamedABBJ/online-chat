"use client";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import LoginAsGuest from "./components/login-as-guest";
import LoginWithGithub from "./components/login-with-github";
import LoginWithGoogle from "./components/login-with-google";

function UserLoginDialog() {
  const { openLoginDialogProps, setOpenLoginDialogProps } =
    userDialogLoginStore();
  //TODO fix type
  return (
    <Dialog
      open={openLoginDialogProps.open}
      onOpenChange={() =>
        setOpenLoginDialogProps({ ...openLoginDialogProps, open: false })
      }
    >
      <DialogTrigger></DialogTrigger>
      <DialogContent className="flex flex-col items-center">
        <DialogTitle>Sign In</DialogTitle>
        <LoginWithGoogle />
        <LoginWithGithub />
        {openLoginDialogProps.loginMode == "allOptions" && <LoginAsGuest />}
      </DialogContent>
    </Dialog>
  );
}

export default UserLoginDialog;
