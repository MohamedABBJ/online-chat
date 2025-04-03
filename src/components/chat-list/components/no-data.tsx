"use client";
import Image from "next/image";
import { useState } from "react";
import UpsideDownSmile from "../../../../public/upside_down_smile.svg";

function NoData({ view }: { view: "notifications" | "friends" }) {
  return (
    <>
      {view == "notifications" ? (
        <NoNotifications />
      ) : view == "friends" ? (
        <NoFriends />
      ) : (
        new Error("The calling data was not correct")
      )}
    </>
  );
}

function NoNotifications() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src={UpsideDownSmile} className="w-1/3" alt="upsideDownSmile" />
      <p>So empty</p>
    </div>
  );
}

function NoFriends() {
  const [noFriendsMessage, setNoFriendsMessage] = useState({
    principalMessage: "You have no friends, you'll have",
    extraMessage: "",
  });

  setTimeout(() => {
    setNoFriendsMessage({ ...noFriendsMessage, extraMessage: "eventually" });
  }, 2000);

  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <Image src={UpsideDownSmile} className="w-1/3" alt="upsideDownSmile" />
      <p>{`${noFriendsMessage.principalMessage} ${noFriendsMessage.extraMessage}`}</p>
    </div>
  );
}

export default NoData;
