import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserMessageProps from "@/interfaces/user-messages-props";
import replyingStateStore from "@/store/replying-state-store";

function MoreMessageOptions({
  messageElement,
}: {
  messageElement: UserMessageProps;
}) {
  const { setReplyData } = replyingStateStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="absolute right-2 top-2 focus:outline-none">{`↓`}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <button
            onClick={() =>
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
