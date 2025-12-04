import { getConnection } from "../../databases/redis.js";

export const getAll = async () => {
  const connection = await getConnection();
  const keys = await connection.keys("*");
  const res = await Promise.all(keys.map((key) => connection.get(key)));
  return res.map(JSON.parse);
};

export const get = async (id) => {
  const connection = await getConnection();
  const res = await connection.get(id);
  return JSON.parse(res);
};

export const insert = async (movie) => {
  const connection = await getConnection();
  movie.id = crypto.randomUUID();
  await connection.set(movie.id, JSON.stringify(movie));
};

export const update = async (movie) => {
  const connection = await getConnection();
  await connection.set(movie.id, JSON.stringify(movie));
};

export const remove = async (id) => {
  const connection = await getConnection();
  await connection.del(id);
};
