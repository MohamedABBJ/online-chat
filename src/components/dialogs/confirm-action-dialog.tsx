"use client";

import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";
import confirmActionDialogStore from "@/store/dialog-stores/confirm-action-dialog-store";
import removeBlockUserHandler from "@/utils/remove-block-user-handler";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

function ConfirmActionDialog({ session }: { session: UserSessionProps }) {
  const { open, setOpen, typeOfAction, friendDetails } =
    confirmActionDialogStore();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col items-center">
        <DialogTitle>{`Are you sure that you want to ${typeOfAction} this user?`}</DialogTitle>
        <div className="flex gap-2">
          <Button
            onClick={async () => {
              //TODO:Delete test constant
              const test = await removeBlockUserHandler({
                session,
                typeOfAction,
                friendDetails,
              });
              if (test) {
                setOpen(false);
                setTimeout(() => {
                  socket.emit("updateFriendList");
                }, 1000);
              }
            }}
          >
            Accept
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmActionDialog;
