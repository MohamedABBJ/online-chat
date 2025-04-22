"use client";
import { Button } from "@/components/ui/button";
import useUsersTyping from "@/hooks/use-users-typing";
import UserSessionProps from "@/interfaces/user-session-props";
import chatMessagesLoadingStore from "@/store/chat-messages-loading-store";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";
import replyContainerStore from "@/store/dialog-stores/upload-image-dialog-store";

import useLoggedInDialog from "@/hooks/use-logged-in-dialog";
import useSendMessage from "@/hooks/use-send-message";
import btnAIStateStore from "@/store/btn-ai-state-store";
import replyingStateStore from "@/store/replying-state-store";
import userTypingHandler from "@/utils/user-typing-handler";
import { Check, FileImage } from "lucide-react";
import BottomScroller from "./bottom-scroller";

function ReplyContainer({
  session,
  imageMessage,
  chat_id,
}: {
  session: UserSessionProps;
  imageMessage: {
    view: boolean;
    message?: string;
  };
  chat_id: string;
}) {
  const { setOpenImageDialog, setMessage, message, setImage } =
    replyContainerStore();
  const { replyData, setReplyData } = replyingStateStore();
  const { active, setActive } = btnAIStateStore();
  /*This makes a rerender*/
  const currentUsersTyping = useUsersTyping({
    session: session,
    chat_id: chat_id,
  });
  const mbConversion = {
    maxSize: 5.0,
    mbDivisor: 1000000,
  };
  const { setProps } = informationDialogStore();
  const { loaded } = chatMessagesLoadingStore();
  const { messageSender } = useSendMessage();
  const { handler } = useLoggedInDialog({ session });
  return (
    <div
      className={`relative mb-4 flex ${imageMessage.view ? "h-14" : "h-[20%]"} w-full justify-center`}
    >
      {!imageMessage.view && (
        <div
          className={`absolute flex w-full justify-center transition-all duration-300`}
        >
          <BottomScroller />
        </div>
      )}
      <div className="absolute flex h-full w-full px-2 md:w-11/12 md:px-0">
        {currentUsersTyping.length > 0 && (
          <div className="absolute -top-6 flex w-full justify-between bg-white px-6 outline outline-1 outline-black">
            {currentUsersTyping.length > 5 ? (
              <p>{`Many users are typing...`}</p>
            ) : (
              <p>
                {`${currentUsersTyping.map((element) => ` ${element.name}`)} `}
                {`${currentUsersTyping.length >= 2 ? "are typing" : "is typing"}`}
              </p>
            )}
          </div>
        )}
        <div className="relative w-full rounded-xl border border-black">
          {replyData.replyState && (
            <div className="flex w-full justify-between px-6 outline outline-1 outline-black">
              <p>replying</p>
              <button
                onClick={() =>
                  setReplyData({ replyState: false, messageID: null })
                }
              >
                x
              </button>
            </div>
          )}

          <textarea
            value={message}
            onClick={() => {
              handler({ restrictedForGuest: false });
            }}
            onKeyDown={async (event) => {
              if (event.key == "Enter") {
                event.preventDefault();
                await messageSender({ session: session });
              }
            }}
            onChange={(event) => {
              if (!session) {
                return;
              }
              setMessage(event.currentTarget.value);
              userTypingHandler({
                session: session,
                chat_id: chat_id,
              });
            }}
            placeholder="Write a reply.."
            className="flex h-full w-full resize-none items-start bg-white"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <Button
              disabled={!loaded}
              className="h-full"
              onClick={async () => {
                handler({ restrictedForGuest: false }) &&
                  (await messageSender({ session: session }));
              }}
            >
              <Check />
            </Button>
            {!imageMessage.view && (
              <Button
                onClick={() => {
                  handler({ restrictedForGuest: false });
                }}
                className="relative h-full"
              >
                <label className="absolute flex h-full w-full items-center justify-center">
                  <FileImage />
                  <input
                    disabled={!session}
                    onClick={(event) => {
                      if (!session) {
                        return;
                      }
                      event.currentTarget.value = "";
                    }}
                    onChange={(event) =>
                      event.target.files &&
                      event.target.files[0].size / mbConversion.mbDivisor <=
                        mbConversion.maxSize
                        ? (setOpenImageDialog(true), setImage(event))
                        : setProps({
                            open: true,
                            callingName: { prop: "image5MBError" },
                          })
                    }
                    accept="image/*"
                    hidden
                    type="file"
                  />
                </label>
              </Button>
            )}
          </div>
          {!imageMessage.view && (
            <Button
              onClick={() => {
                handler({ restrictedForGuest: true }) && setActive(!active);
              }}
              variant={`${active ? "destructive" : "default"}`}
              className={`h-full w-full`}
            >
              AI
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReplyContainer;
