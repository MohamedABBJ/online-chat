"use client";
import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import addUserQuery from "@/db/add-user-query";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
import userDialogLoginStore from "@/store/user-login-dialog-store";

function AddUserBtn({
  messageElement,
  session,
}: {
  messageElement?: UserMessageProps;
  session?: UserSessionProps;
}) {
  const { setOpenLoginDialogProps } = userDialogLoginStore();
  return (
    <>
      {messageElement?.user_details?.type == "oAuthUser" &&
      session?.user?.id != messageElement.user_details.id ? (
        session?.user?.type == "Guest" ? (
          <Button
            onClick={() =>
              setOpenLoginDialogProps({
                loginMode: "oAuthOptions",
                open: true,
              })
            }
          >
            Add user
          </Button>
        ) : (
          <Button
            onClick={async () => {
              if (!session) {
                setOpenLoginDialogProps({
                  loginMode: "allOptions",
                  open: true,
                });
                return;
              }
              await addUserQuery({
                requiredData: {
                  user_id: session?.user?.id as string,
                  friend_id: messageElement.user_id as string,
                },
              });
              socket.emit("addUser");
            }}
          >
            Add user
          </Button>
        )
      ) : null}
    </>
  );
}

export default AddUserBtn;
