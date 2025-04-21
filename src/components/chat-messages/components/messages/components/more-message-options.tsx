import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLoggedInDialog from "@/hooks/use-logged-in-dialog";
import UserMessageProps from "@/interfaces/user-messages-props";
import UserSessionProps from "@/interfaces/user-session-props";
import replyingStateStore from "@/store/replying-state-store";

function MoreMessageOptions({
  messageElement,
  session,
}: {
  messageElement: UserMessageProps;
  session: UserSessionProps;
}) {
  const { setReplyData } = replyingStateStore();
  const { handler } = useLoggedInDialog({ session });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="absolute right-2 top-2 focus:outline-none">{`↓`}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <button
            onClick={() =>
              handler({ restrictedForGuest: false }) &&
              setReplyData({
                replyState: true,
                messageID: messageElement.id.toString(),
              })
            }
          >
            Reply
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MoreMessageOptions;
