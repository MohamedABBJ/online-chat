"use server";
import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { messagesTable } from "../../drizzle/schema";

const sendMessageQuery = async (props: { userID: number; message: string }) => {
  try {
    //should check if user is stored in the database or not, it can have an inconsistency
    //if the user has the session but doesn't have any user on the db

    const db = drizzle(client);

    await db
      .insert(messagesTable)
      .values({ message: props.message, user_id: props.userID });
  } catch (error) {
    console.log(error);
  }
};

export default sendMessageQuery;
