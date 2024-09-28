"use server";

import { auth } from "@/auth";
import UserSessionProps from "@/interfaces/user-session-props";
import encryptDecrypt from "@/utils/encrypter";

import { cookies } from "next/headers";

async function verifyUserSession() {
  const guestSession = cookies().get("session")?.value;
  const userOAuthSession: UserSessionProps = (await auth()) as UserSessionProps;

  if (guestSession) {
    return await encryptDecrypt.decrypt(guestSession);
  }

  if (userOAuthSession) {
    return userOAuthSession;
  }
  return null;
}

export default verifyUserSession;
