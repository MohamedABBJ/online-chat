import pg from "pg";

const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123",
  database: "postgres",
});

client.connect();

export default client;
