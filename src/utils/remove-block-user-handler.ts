"use client";

import removeOrBlockUserQuery from "@/db/remove-block-user-query";
import UserSessionProps from "@/interfaces/user-session-props";

const removeBlockUserHandler = async ({
  session,
  typeOfAction,
  friendDetails,
}: {
  session: UserSessionProps;
  typeOfAction: "remove" | "block";
  friendDetails: UserFriendsChat | null;
}) => {
  const removeOrBlockUserQueryData = {
    user_id: session?.user.id as string,
    friend_id: friendDetails?.friendData?.id as string,
  };

  if (typeOfAction === "remove") {
    await removeOrBlockUserQuery({
      requiredData: removeOrBlockUserQueryData,
      typeOfQuery: "removed",
    });

    return true;
  }

  if (typeOfAction === "block") {
    await removeOrBlockUserQuery({
      requiredData: removeOrBlockUserQueryData,
      typeOfQuery: "blocked",
    });
    return true;
  }

  return false;
};

export default removeBlockUserHandler;
