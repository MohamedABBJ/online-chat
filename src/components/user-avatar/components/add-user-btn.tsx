import { socket } from "@/app/socket";
import { Button } from "@/components/ui/button";
import UserLoginDialog from "@/components/user-login-dialog/user-login-dialog";
import addUserQuery from "@/db/add-user-query";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";

function AddUserBtn({
  messageElement,
  session,
}: {
  messageElement?: UserMessageProps;
  session?: UserSessionProps;
}) {
  return (
    <>
      {messageElement?.user_details?.type == "oAuthUser" &&
      session?.user?.id != messageElement.user_details.id ? (
        session?.user?.type == "Guest" ? (
          <UserLoginDialog loginMode="addUser" />
        ) : (
          <Button
            onClick={async () => {
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
