import { Sequelize } from "sequelize";

let connection;

export const getConnection = async () => {
  if (!connection) {
    connection = new Sequelize("movie-db", "moviedb", "1234", {
      host: "localhost",
      dialect: "mysql",
    });
    await connection.authenticate();
  }
  return connection;
};
