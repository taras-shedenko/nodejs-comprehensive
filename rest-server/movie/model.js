import { connection } from "../mysql.js";

export const getAll = async (authorId, sort) => {
  let sql = "SELECT * FROM movies where author = ? OR ispublic = 1";
  if (sort === "asc") sql += " order by title asc";
  else if (sort === "desc") sql += " order by title desc";
  const res = await connection.query(sql, [authorId]);
  return res[0];
};

export const getOne = async (id) => {
  const res = await connection.query("SELECT * FROM movies WHERE id = ?", [id]);
  return res[0][0];
};

export const insert = async (movie) => {
  const res = await connection.query(
    "INSERT INTO movies(title, year, author, ispublic) values(?, ?, ?, ?)",
    [movie.title, movie.year, movie.author, movie.ispublic]
  );
  return res[0].insertId;
};

export const update = async (id, movie) => {
  await connection.query(
    "UPDATE movies SET title = ?, year = ?, author = ?, ispublic = ? WHERE id = ?",
    [movie.title, movie.year, movie.author, movie.ispublic, id]
  );
};

export const remove = async (id, authorId) => {
  await connection.query("DELETE FROM movies WHERE id = ? AND author = ?", [
    id,
    authorId,
  ]);
};
