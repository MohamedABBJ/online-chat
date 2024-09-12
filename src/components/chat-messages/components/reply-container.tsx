"use client";
import { socket } from "@/app/socket";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import sendMessageQuery from "@/db/send-message-query";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";
import { JWTPayload } from "jose";
import { useState } from "react";
import { io } from "socket.io-client";
import UserLoggedIn from "./top-bar/components/user-logged";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

function ReplyContainer(props: {
  userLoggedIn: () => Promise<JWTPayload | null>;
}) {
  const { setOpen } = userDialogLoginStore();
  const [message, setMessage] = useState("");
  const sendMessageHandler = async () => {
    //TODO: Fix problem with type
    if (props.userLoggedIn as () => Promise<JWTPayload | null>) {
      const messageData = {
        userID: props.userLoggedIn.user.id,
        message: message,
      };
      socket.emit("newMessage", await sendMessageQuery(messageData));
    } else {
      userDialogLoginHandler({ setOpen: setOpen }).handleOpen();
    }
  };
  return (
    <div className="mb-4 flex h-[20%] w-11/12">
      <div className="w-full rounded-xl border border-black">
        <input
          onChange={(event) => setMessage(event.currentTarget.value)}
          placeholder="Write a reply..."
          className="flex h-full w-full items-start"
        />
      </div>
      <div>
        <Button onClick={sendMessageHandler}>
          <Check />
        </Button>
      </div>
    </div>
  );
}

export default ReplyContainer;
