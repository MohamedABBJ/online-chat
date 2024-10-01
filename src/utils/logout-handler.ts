"use server";

import { signOut } from "@/auth";
import { cookies } from "next/headers";

const logoutHandler = async ({
  logoutType,
}: {
  logoutType: "oAuthUser" | "Guest" | undefined;
}) => {
  if (logoutType == "Guest") {
    cookies().delete("session");
  }
  if (logoutType == "oAuthUser") {
    await signOut();
  }

  return;
};

export default logoutHandler;
