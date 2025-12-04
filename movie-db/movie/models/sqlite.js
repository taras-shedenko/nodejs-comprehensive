import { database } from "../../databases/sqlite.js";

export const getAll = () =>
  new Promise((resolve, reject) =>
    database.all("SELECT id, title, year FROM movies", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  );

export const get = (id) =>
  new Promise((resolve, reject) =>
    database.get(
      "SELECT id, title, year FROM movies WHERE id = ?",
      [id],
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      }
    )
  );

export const insert = (movie) =>
  new Promise((resolve, reject) =>
    database.run(
      "INSERT INTO movies (title, year) VALUES (?, ?)",
      [movie.title, movie.year],
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      }
    )
  );

export const update = (movie) =>
  new Promise((resolve, reject) =>
    database.run(
      "UPDATE movies SET title = ?, year = ? WHERE id = ?",
      [movie.title, movie.year, movie.id],
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      }
    )
  );

export const remove = (id) =>
  new Promise((resolve, reject) =>
    database.run("DELETE FROM movies WHERE id = ?", [id], [id], (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  );
