"use server";

import { auth } from "@/auth";
import encryptDecrypt from "@/utils/encrypter";
import { cookies } from "next/headers";

async function verifyUserSession() {
  const guestSession = cookies().get("session")?.value;
  const userOAuthSession = auth();

  if (guestSession) {
    return await encryptDecrypt.decrypt(guestSession);
  }

  if (userOAuthSession) {
    return await userOAuthSession;
  }
  return null;
}

export default verifyUserSession;
