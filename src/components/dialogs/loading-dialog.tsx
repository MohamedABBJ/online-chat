"use client";

import { OrbitProgress } from "react-loading-indicators";
import { Dialog, DialogContent } from "../ui/dialog";

function LoadingDialog() {
  const spinnerColor = "#0099ff";
  return (
    <Dialog open={true}>
      <DialogContent className="flex flex-col items-center">
        <OrbitProgress
          color={spinnerColor}
          size="large"
          text="loading"
          textColor=""
        />
      </DialogContent>
    </Dialog>
  );
}

export default LoadingDialog;
