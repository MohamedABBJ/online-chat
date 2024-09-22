"use server";

import { auth } from "@/auth";
import encryptDecrypt from "@/utils/encrypter";
import { Session, User } from "next-auth";

import { cookies } from "next/headers";

async function verifyUserSession() {
  const guestSession = cookies().get("session")?.value;
  const userOAuthSession: User = (await auth()) as User;

  if (guestSession) {
    return await encryptDecrypt.decrypt(guestSession);
  }

  if (userOAuthSession) {
    return userOAuthSession;
  }
  return null;
}

export default verifyUserSession;
