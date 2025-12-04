import { getConnection } from "../../databases/mysql.js";

export const getById = async (id) => {
  const connection = await getConnection();
  const res = await connection.query("SELECT * FROM users WHERE id = ?", [id]);
  return res[0][0];
};

export const getByUsername = async (username) => {
  const connection = await getConnection();
  const res = await connection.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  return res[0][0];
};
