"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { messagesTable } from "../../drizzle/schema";

const getMesagesQuery = async () => {
  try {
    const db = drizzle(client);
    const result = await db.select().from(messagesTable);
    return await { messages: result, status: 200 };
  } catch (error) {
    console.log(error);
  }
};

export default getMesagesQuery;
