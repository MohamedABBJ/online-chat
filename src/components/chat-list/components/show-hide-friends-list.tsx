"use client";

import showFriendsListStore from "@/store/mobile/show-friends-list-store";

function ShowHideFriendsList() {
  const { show, setShow } = showFriendsListStore();
  return (
    <label className="relative flex md:hidden">
      <input
        className="relative h-10 w-10 appearance-none border border-red-500"
        type="checkbox"
        src=""
        onClick={(event) => setShow(event.currentTarget.checked)}
        checked={show}
      />
      <span className="absolute">test</span>
    </label>
  );
}

export default ShowHideFriendsList;
