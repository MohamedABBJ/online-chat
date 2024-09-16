"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { usersTable } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

const getUserDataQuery = async ({ user_id }: { user_id: string }) => {
  try {
    const db = drizzle(client);
    const getUserData = (
      await db.select().from(usersTable).where(eq(usersTable.id, user_id))
    )[0];

    return await getUserData;
  } catch (error) {
    console.log(error);
  }
};

export default getUserDataQuery;
