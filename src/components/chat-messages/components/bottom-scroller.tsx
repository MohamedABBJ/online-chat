"use client";
import { Button } from "@/components/ui/button";
import { chatContainerRefStore } from "@/store/refs/chat-container-ref-store";
import { RefObject } from "react";

function BottomScroller() {
  const {
    chatContainerRef,
    notBottom,
    setNotBottom,
    newMessagesProps,
    setNewMessagesProps,
  } = chatContainerRefStore();

  return (
    <>
      <div
        className={`absolute ${notBottom && newMessagesProps.quantity == 0 ? "-top-12" : "top-0"} transition-all duration-300`}
      >
        <ScrollToBottom chatContainerRef={chatContainerRef} />
      </div>
      <div
        className={`absolute ${notBottom && newMessagesProps.quantity > 0 ? "-top-12" : "top-0"} transition-all duration-300`}
      >
        <ScrollToNewNotifications
          setNewMessagesProps={setNewMessagesProps}
          newMessagesProps={newMessagesProps}
        />
      </div>
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
  setNewMessagesProps,
}: {
  newMessagesProps: { quantity: number; latestID: string };
  setNewMessagesProps: (value: { quantity: number; latestID: string }) => void;
}) {
  return (
    <a
      onClick={() =>
        setTimeout(
          () => setNewMessagesProps({ quantity: 0, latestID: "" }),
          1000,
        )
      }
      href={`#${newMessagesProps.latestID}`}
    >
      <Button>{`You have ${newMessagesProps.quantity} new messages`}</Button>
    </a>
  );
}

export default BottomScroller;
