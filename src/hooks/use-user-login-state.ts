"use client";

import verifyUserSession from "@/app/lib/dal";
import { JWTPayload } from "jose";
import { useEffect, useState } from "react";

const useUserLoginState = async () => {
  const [userData, setUserData] = useState<JWTPayload | null>();

  useEffect(() => {
    const getUserData = async () => {
      const checkUser = await verifyUserSession();
      setUserData(await checkUser);
    };
    getUserData();
  }, []);

  return userData;
};

export default useUserLoginState;
