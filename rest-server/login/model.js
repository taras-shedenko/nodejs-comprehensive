import { connection } from "../mysql.js";

export const getByUsername = async (username) => {
  const res = await connection.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  return res[0][0];
};
