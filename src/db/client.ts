import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456",
  database: "postgres",
});

export default client;
