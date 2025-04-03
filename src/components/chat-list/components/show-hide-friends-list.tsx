"use client";

import showFriendsListStore from "@/store/mobile/show-friends-list-store";
import Hamburger from "hamburger-react";
function ShowHideFriendsList() {
  const { show, setShow } = showFriendsListStore();
  return (
    <label className="relative flex md:hidden">
      <input
        className="relative appearance-none"
        type="checkbox"
        src=""
        onClick={(event) => setShow(event.currentTarget.checked)}
        checked={show}
      />
      <Hamburger toggled={show} />
    </label>
  );
}

export default ShowHideFriendsList;
