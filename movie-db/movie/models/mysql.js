import { getConnection } from "../../databases/mysql.js";

export const getAll = async (userId) => {
  const connection = await getConnection();
  const res = await connection.query(
    "SELECT * FROM movies WHERE author = ? OR ispublic = 1",
    [userId]
  );
  return res[0];
};

export const get = async (id) => {
  const connection = await getConnection();
  const res = await connection.query("SELECT * FROM movies WHERE id = ?", [id]);
  return res[0][0];
};

export const insert = async (movie) => {
  const connection = await getConnection();
  await connection.query(
    "INSERT INTO movies(title, year, author, ispublic) values(?, ?, ?, ?)",
    [movie.title, movie.year, movie.author, movie.ispublic]
  );
};

export const update = async (movie) => {
  const connection = await getConnection();
  await connection.query(
    "UPDATE movies SET title = ?, year = ?, author = ?, ispublic = ? WHERE id = ?",
    [movie.title, movie.year, movie.author, movie.ispublic, movie.id]
  );
};

export const remove = async (id) => {
  const connection = await getConnection();
  await connection.query("DELETE FROM movies WHERE id = ?", [id]);
};
