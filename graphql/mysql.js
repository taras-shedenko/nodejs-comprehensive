import mysql from "mysql2/promise";

let connection;

export const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "moviedb",
      password: "1234",
      database: "movie-db",
    });
    await connection.connect();
  }
  return connection;
};
