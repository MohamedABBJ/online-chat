"use client";

import { Dialog, DialogContent } from "../ui/dialog";

function LoadingDialog() {
  return (
    <Dialog open={true}>
      <DialogContent className="flex flex-col items-center"></DialogContent>
    </Dialog>
  );
}

export default LoadingDialog;
