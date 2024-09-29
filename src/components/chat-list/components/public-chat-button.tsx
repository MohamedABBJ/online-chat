"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function PublicChatButton() {
  const route = useRouter();
  return (
    <>
      <Button
        onClick={(event) => {
          event.preventDefault();
          route.push("/");
        }}
        className="w-full"
      >
        Public chat
      </Button>
    </>
  );
}

export default PublicChatButton;
