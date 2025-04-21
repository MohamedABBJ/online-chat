import { socket } from "@/app/socket";
import UserSessionProps from "@/interfaces/user-session-props";
import btnAIStateStore from "@/store/btn-ai-state-store";
import currentChatIdStore from "@/store/current-chat-id-store";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";
import replyContainerStore from "@/store/dialog-stores/upload-image-dialog-store";
import replyingStateStore from "@/store/replying-state-store";
import userDialogLoginStore from "@/store/user-login-dialog-store";
import openAIQuery from "@/utils/ai/openai-query";
import uploadImageMessage from "@/utils/aws/upload-image.message";
import messageQuery from "@/utils/message-query";
import userDialogLoginHandler from "@/utils/user-dialog-login-handler";

function useSendMessage() {
  const { setOpenImageDialog, setMessage, message, setImage, image } =
    replyContainerStore();
  //TODO: userDialogLoginStore should have both stores in a single one
  const { setOpen } = userDialogLoginStore();
  const { chatID } = currentChatIdStore();
  const { replyData, setReplyData } = replyingStateStore();
  const { setProps } = informationDialogStore();
  const { active, setActive } = btnAIStateStore();

  const sendMessageHandler = async ({
    image,
    session,
  }: {
    image: string | null;
    session: UserSessionProps;
  }) => {
    if (session) {
      if (chatID != "public_chat") {
        const privateMessageQueryResult = await messageQuery({
          messageData: message.trim(),
          replyID: replyData.messageID,
          userID: session.user.id as string,
          image: image,
          chatID: chatID,
        });

        if (!privateMessageQueryResult) {
          setProps({
            open: true,
            callingName: { prop: "sendingMessageError" },
          });
          return;
        }

        socket.emit(`newPrivateMessage`, privateMessageQueryResult);
        socket.emit("newMessageScroller", session.user?.id);
        setActive(false);

        active &&
          socket.emit(
            "newPrivateMessage",
            await messageQuery({
              messageData: (await openAIQuery({ message: message })) as string,
              replyID: privateMessageQueryResult?.id.toString() as string,
              userID: "1",
              image: image,
              chatID: chatID,
            }),
          );
      } else {
        const messageQueryResult = await messageQuery({
          messageData: message.trim(),
          replyID: replyData.messageID,
          userID: session.user.id as string,
          image: image,
          chatID: chatID,
        });

        if (!messageQueryResult) {
          setProps({
            open: true,
            callingName: { prop: "sendingMessageError" },
          });
          return;
        }

        socket.emit("newMessage", messageQueryResult);
        socket.emit("newMessageScroller", session.user?.id);
        setActive(false);

        active &&
          socket.emit(
            "newMessage",
            await messageQuery({
              messageData: (await openAIQuery({ message: message })) as string,
              replyID: messageQueryResult?.id.toString() as string,
              userID: "1",
              image: image,
              chatID: chatID,
            }),
          );

        socket.emit("newMessageScroller", session.user?.id);
      }
    } else {
      userDialogLoginHandler({ setOpen: setOpen }).handleOpen();
    }
    setMessage("");
    setOpenImageDialog(false);
    setImage(null);
  };

  const messageSender = async ({ session }: { session: UserSessionProps }) => {
    if (message.trim() == "") {
      return;
    }
    if (image) {
      const imageName = await uploadImageMessage(image);
      imageName &&
        (await sendMessageHandler({ image: imageName, session: session }));
      setReplyData({ replyState: false, messageID: null });
      return;
    }
    sendMessageHandler({ image: null, session: session });
    setReplyData({ replyState: false, messageID: null });
  };

  return { messageSender };
}

export default useSendMessage;
