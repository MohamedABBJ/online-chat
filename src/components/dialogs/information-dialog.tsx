"use client";

import UserSessionProps from "@/interfaces/user-session-props";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";
import dialogMessages from "@/utils/dialogMessages";
import { CircleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

function InformationDialog({ session }: { session: UserSessionProps }) {
  const { props, setProps } = informationDialogStore();

  return (
    <Dialog
      open={true}
      onOpenChange={() => setProps({ ...props, open: false })}
    >
      <DialogContent className="flex flex-col items-center">
        <DialogTitle>
          <CircleAlert className="h-16 w-16" />
          {dialogMessages[0].message}
        </DialogTitle>
        <div className="flex gap-2">
          <Button>Accept</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default InformationDialog;
