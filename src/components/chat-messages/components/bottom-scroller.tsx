"use client";
import { Button } from "@/components/ui/button";
import { chatContainerRefStore } from "@/store/refs/chat-container-ref-store";
import { RefObject } from "react";

function BottomScroller() {
  const { chatContainerRef, notBottom, setNotBottom, newMessagesProps } =
    chatContainerRefStore();
  console.log(newMessagesProps.quantity);
  return (
    <>
      {notBottom && newMessagesProps.quantity > 0 && (
        <ScrollToNewNotifications newMessagesProps={newMessagesProps} />
      )}
    </>
  );

  /*  <ScrollToBottom chatContainerRef={chatContainerRef} />*/
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

function ScrollToNewNotifications({
  newMessagesProps,
}: {
  newMessagesProps: { quantity: number; latestID: string };
}) {
  return (
    <Button>{`You have ${newMessagesProps.quantity} new messages`}</Button>
  );
}

export default BottomScroller;
