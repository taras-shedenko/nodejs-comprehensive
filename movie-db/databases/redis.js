import { createClient } from "redis";

let connection;

export const getConnection = async () => {
  if (!connection)
    connection = await createClient().on("error", console.error).connect();
  return connection;
};
