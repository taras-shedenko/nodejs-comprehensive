import mysql from "mysql2/promise";

export const connection = await mysql.createConnection({
  host: "localhost",
  user: "moviedb",
  password: "1234",
  database: "movie-db",
});
await connection.connect();
