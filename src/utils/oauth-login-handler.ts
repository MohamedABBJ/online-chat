"use server";

import { signIn } from "@/auth";
import { cookies } from "next/headers";

async function oAuthLoginHandler({ method }: { method: "google" | "github" }) {
  cookies().delete("session");
  await signIn(method);
}

export default oAuthLoginHandler;
