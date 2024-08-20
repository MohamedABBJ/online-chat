import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import encryptDecrypt from "./utils/encrypter";

function middleware(request: NextRequest) {
  const getSessionCookies = () => {
    return cookies().get("session")?.value;
  };

  const getUserData = async () => {
    if (getSessionCookies()) {
      const userData = await encryptDecrypt.decrypt(getSessionCookies());
      NextResponse.json(userData);
    }
  };

  getUserData();
}

export default middleware;
