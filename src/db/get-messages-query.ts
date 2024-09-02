"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { messagesTable, usersTable } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

const getMesagesQuery = async () => {
  try {
    const db = drizzle(client);
    const messages = await db.select().from(messagesTable);
    const test2 = await db.select().from(usersTable);
    //try to get the user details from the user ID.
    const messagesWithRole = await messages.map((element) => ({
      ...element,
      user_type: db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, element.user_id as string)),
    }));

    return await { messages: messagesWithRole, status: 200 };
  } catch (error) {
    console.log(error);
  }
};

export default getMesagesQuery;
