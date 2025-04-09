"use client";
import { Button } from "@/components/ui/button";
import { chatContainerRefStore } from "@/store/refs/chat-container-ref-store";

function BottomScroller() {
  const { chatContainerRef, notBottom, setNotBottom } = chatContainerRefStore();

  return <ScrollToBottom />;
}

function ScrollToBottom() {
  return <Button>Scroll to bottom</Button>;
}

export default BottomScroller;
