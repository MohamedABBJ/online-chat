import { drizzle } from "drizzle-orm/node-postgres";
import client from "./client";
import { integer, pgTable, text } from "drizzle-orm/pg-core";

const sendMessageQuery = async () => {
  try {
    const db = drizzle(client);

    const cars = pgTable("cars", {
      brand: text("brand"),
      model: text("model"),
      year: integer("year"),
    });

    return await db.select().from(cars);
  } catch (error) {
    console.log(error);
  }
};

export default sendMessageQuery;
