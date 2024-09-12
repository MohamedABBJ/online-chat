"use client";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import LoginAsGuest from "./components/login-as-guest";
import LoginWithGithub from "./components/login-with-github";
import LoginWithGoogle from "./components/login-with-google";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import UserAvatar from "../user-avatar/user-avatar";

function UserLoginDialog({ userData }: { userData: object }) {
  const { open, setOpen } = userDialogLoginStore();
  //TODO fix type
  return (
    <Dialog
    //onClose={() => userDialogLoginHandler({ setOpen: setOpen }).handleClose()}
    >
      <DialogTrigger asChild>
        <Button className="p-0" variant={"ghost"}>
          <UserAvatar />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center">
        <DialogTitle>Sign In</DialogTitle>
        <LoginWithGoogle />
        <LoginWithGithub />
        {(userData && userData.user.type != "Guest") || userData == null ? (
          <LoginAsGuest />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export default UserLoginDialog;
