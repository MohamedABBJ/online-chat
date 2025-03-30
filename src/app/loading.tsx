"use client";
import { useState } from "react";
import { OrbitProgress } from "react-loading-indicators";

function Loading() {
  const [loadingAnim, setLoadingAnim] = useState("Loading");

  setInterval(() => {
    if (loadingAnim != "Loading...") {
      setLoadingAnim(loadingAnim + ".");
      return;
    }
    setLoadingAnim("Loading");
    return;
  }, 800);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <OrbitProgress color={"green"} size="medium" text={loadingAnim} />
    </div>
  );
}

export default Loading;
