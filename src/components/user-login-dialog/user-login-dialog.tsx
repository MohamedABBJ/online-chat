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

function UserLoginDialog({
  loginMode,
}: {
  loginMode: "complete" | "oAuth" | "addUser";
}) {
  //TODO fix type
  return (
    <Dialog
    //onClose={() => userDialogLoginHandler({ setOpen: setOpen }).handleClose()}
    >
      <DialogTrigger asChild>
        <Button className="p-0" variant={"ghost"}>
          {loginMode == "complete" ? (
            <UserAvatar />
          ) : loginMode == "oAuth" ? (
            "Login with auth"
          ) : loginMode == "addUser" ? (
            "Add user"
          ) : null}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center">
        <DialogTitle>Sign In</DialogTitle>
        <LoginWithGoogle />
        <LoginWithGithub />
        {loginMode == "complete" ? <LoginAsGuest /> : null}
      </DialogContent>
    </Dialog>
  );
}

export default UserLoginDialog;
