import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserSessionProps from "@/interfaces/user-session-props";
import informationDialogStore from "@/store/dialog-stores/information-dialog-store";
import userBlockedHandler from "@/utils/user-blocked-handler";

function MoreFriendsOptions({
  friendDetails,
  session,
}: {
  friendDetails: UserFriendsChat;
  session: UserSessionProps;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">{`...`}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {userBlockedHandler({
          friendDetails: friendDetails,
          session: session,
        }).checkIfFriendBlocked && (
          <BlockRemoveUserButtons friendDetails={friendDetails} />
        )}
        {userBlockedHandler({ friendDetails: friendDetails, session: session })
          .checkIfUserBlocked && (
          <UnblockUserButtons
            mode="unblockUser"
            friendDetails={friendDetails}
          />
        )}
        {userBlockedHandler({ friendDetails: friendDetails, session: session })
          .checkIfBothBlocked && (
          <UnblockUserButtons
            mode={
              session.user.id == friendDetails.friendData?.id
                ? "unblockFriend"
                : "unblockUser"
            }
            friendDetails={friendDetails}
          />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const UnblockUserButtons = ({
  friendDetails,
  mode,
}: {
  mode: "unblockFriend" | "unblockUser";
  friendDetails: UserFriendsChat;
}) => {
  const { setProps } = informationDialogStore();
  return (
    <div>
      <button
        onClick={async () => {
          setProps({
            open: true,
            callingName: { prop: mode },
            friendDetails: friendDetails,
          });
        }}
      >
        Unblock
      </button>
    </div>
  );
};

const BlockRemoveUserButtons = ({
  friendDetails,
}: {
  friendDetails: UserFriendsChat;
}) => {
  const { setProps } = informationDialogStore();
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={async () => {
          setProps({
            open: true,
            callingName: { prop: "removeUser" },
            friendDetails: friendDetails,
          });
        }}
      >
        Remove
      </button>
      <button
        onClick={async () => {
          setProps({
            open: true,
            callingName: { prop: "blockUser" },
            friendDetails: friendDetails,
          });
        }}
      >
        Block
      </button>
    </div>
  );
};

export default MoreFriendsOptions;
