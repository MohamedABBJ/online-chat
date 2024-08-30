"use server";

import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { usersTable } from "../../drizzle/schema";
import IDGenerator from "@/utils/id-generator";
import encryptDecrypt from "@/utils/encrypter";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export async function loginAsGuestQuery() {
  const guestIdentifier = "Guest";
  const guestID = `Guest_${IDGenerator()}`;
  try {
    const db = drizzle(client);

    await db
      .insert(usersTable)
      .values({ name: guestID, type: guestIdentifier });

    const userIDQuery = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.name, guestID));

    const userID = userIDQuery[0].id;

    const jwtSession = await encryptDecrypt.encrypter({
      userID: userID,
      userName: guestID,
      userType: guestIdentifier,
    });

    cookies().set("session", jwtSession, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return { status: "200" };
  } catch (error) {
    return { status: "500" };
  }
}
