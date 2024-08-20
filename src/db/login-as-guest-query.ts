"use server";

import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { usersTable } from "../../drizzle/schema";
import { integer, pgTable, text } from "drizzle-orm/pg-core";
import IDGenerator from "@/utils/id-generator";
import encryptDecrypt from "@/utils/encrypter";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export async function loginAsGuestQuery() {
  const guestID = `Guest_${IDGenerator()}`;
  try {
    const db = drizzle(client);

    await db.insert(usersTable).values({ user_name: guestID });

    const userIDQuery = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.user_name, guestID));

    const userID = userIDQuery[0].id;

    const jwtSession = await encryptDecrypt.encrypter({
      userID: userID,
      userName: guestID,
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
