"use server";

import encryptDecrypt from "@/utils/encrypter";
import { cookies } from "next/headers";

async function verifyUserSession() {
  const getUserCookie = cookies().get("session")?.value;
  const session = await encryptDecrypt.decrypt(getUserCookie);

  if (!session) {
    return null;
  }

  return session;
}

export default verifyUserSession;
