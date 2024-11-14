import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "../../../drizzle/schema";
import client from "../client";

const databaseSeeder = async () => {
  const db = drizzle(client);
  try {
    console.log("Seeding started...");

    await db
      .insert(usersTable)
      .values({ id: "1", name: "Online Chat Bot", type: "AI" });

    console.log("Seeding completed.");
  } catch (error) {
    console.log(error);
  }
};

databaseSeeder();
