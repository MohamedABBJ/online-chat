"use client";
import { Button } from "@/components/ui/button";
import { chatContainerRefStore } from "@/store/refs/chat-container-ref-store";
import { RefObject } from "react";

function BottomScroller() {
  const { chatContainerRef, notBottom, setNotBottom } = chatContainerRefStore();

  return (
    <>
      {notBottom ? (
        <ScrollToBottom chatContainerRef={chatContainerRef} />
      ) : (
        <ScrollToNewNotifications />
      )}
    </>
  );
}

function ScrollToBottom({
  chatContainerRef,
}: {
  chatContainerRef: RefObject<HTMLDivElement>;
}) {
  return (
    <Button
      onClick={() =>
        chatContainerRef.current?.scrollTo(
          0,
          chatContainerRef.current?.scrollHeight,
        )
      }
    >
      Scroll to bottom
    </Button>
  );
}

function ScrollToNewNotifications() {
  return <Button>You have 0 new messages</Button>;
}

export default BottomScroller;
