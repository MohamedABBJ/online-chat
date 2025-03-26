"use client";

import { OrbitProgress } from "react-loading-indicators";
import { DialogContent, DialogWithoutX } from "../ui/dialogWithoutX";

function LoadingDialog() {
  const spinnerColor = "#0099ff";
  return (
    <DialogWithoutX open={true}>
      <DialogContent className="flex flex-col items-center">
        <OrbitProgress
          color={spinnerColor}
          size="large"
          text="loading"
          textColor=""
        />
      </DialogContent>
    </DialogWithoutX>
  );
}

export default LoadingDialog;
