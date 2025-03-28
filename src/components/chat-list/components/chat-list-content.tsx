import verifyUserSession from "@/app/lib/dal";
import Loading from "@/app/loading";
import UserSessionProps from "@/interfaces/user-session-props";
import getUserNotifications from "@/utils/get-notifications";
import dynamic from "next/dynamic";
import ChatListOptions from "./chat-list-options";

const ChatListFriendsNotifications = dynamic(
  () => import("./chat-list-friends-notifications"),
  { ssr: false, loading: () => <Loading /> },
);

async function ChatListContent() {
  const session: UserSessionProps =
    (await verifyUserSession()) as UserSessionProps;

  const getUserFriendsFun = () => {
    return getUserNotifications({
      friendState: "accepted",
      session: session,
    });
  };

  return (
    <>
      <ChatListOptions />
      <ChatListFriendsNotifications
        session={session}
        getUserFriendsFun={getUserFriendsFun()}
      />
    </>
  );
}

export default ChatListContent;
