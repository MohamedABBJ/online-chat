"use server";

import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { usersTable } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

const updateProfileImage = async ({
  newImage,
  user_id,
}: {
  newImage: string;
  user_id: string;
}) => {
  const db = drizzle(client);

  try {
    await db
      .update(usersTable)
      .set({ image: newImage })
      .where(eq(usersTable.id, user_id))
      .returning({ newImage: usersTable.image });
  } catch (error) {
    console.log(error);
  }
};

export default updateProfileImage;
