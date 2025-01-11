"use client";

import UserSessionProps from "@/interfaces/user-session-props";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";
import dialogHandler from "@/utils/dialogHandlers";
import dialogMessages from "@/utils/dialogMessages";
import { CircleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

function InformationDialog({ session }: { session: UserSessionProps }) {
  const { props, setProps } = informationDialogStore();

  const dialogProps = {
    message: dialogMessages.filter(
      (element) =>
        element.callingName.prop == props.callingName.prop && element.message,
    )[0]?.message,
    type: dialogMessages.filter(
      (element) =>
        element.callingName.prop == props.callingName.prop && element.category,
    )[0]?.category,
  };

  return (
    <Dialog
      open={props.open}
      onOpenChange={() => setProps({ ...props, open: false })}
    >
      <DialogContent className="flex flex-col items-center">
        <DialogTitle className="flex flex-col items-center gap-3">
          <CircleAlert className="h-16 w-16" />
          {dialogProps.message}
        </DialogTitle>
        <div className="flex gap-2">
          {dialogProps.type == "info" && (
            <ConfirmationButtons session={session} />
          )}
          {dialogProps.type == "error" && <AcceptButton />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ConfirmationButtons({ session }: { session: UserSessionProps }) {
  const { props, setProps } = informationDialogStore();
  return (
    <>
      <Button
        onClick={() => {
          dialogHandler({
            callingName: props.callingName,
            requiredData: {
              user_id: session.user.id as string,
              friend_id: props.friendDetails?.friendData?.id as string,
            },
          });
          setProps({ ...props, open: false });
        }}
      >
        Accept
      </Button>
      <Button onClick={() => setProps({ ...props, open: false })}>
        Cancel
      </Button>
    </>
  );
}

function AcceptButton() {
  const { props, setProps } = informationDialogStore();
  return (
    <>
      <Button onClick={() => setProps({ ...props, open: false })}>
        Accept
      </Button>
    </>
  );
}

export default InformationDialog;
