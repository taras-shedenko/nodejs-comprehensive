import { getClient } from "../../databases/mongodb.js";

let movies;

const getMovies = async () => {
  if (!movies) {
    const client = await getClient();
    movies = client.db("moviedb").collection("movies");
  }
  return movies;
};

export const getAll = async () => {
  const movies = await getMovies();
  const res = await movies.find({});
  return res.toArray();
};

export const get = async (id) => {
  const movies = await getMovies();
  const res = await movies.findOne({ id });
  return res;
};

export const insert = async (movie) => {
  const movies = await getMovies();
  movie.id = crypto.randomUUID();
  await movies.insertOne(movie);
};

export const update = async (movie) => {
  const movies = await getMovies();
  await movies.updateOne({ id: movie.id }, { $set: movie });
};

export const remove = async (id) => {
  const movies = await getMovies();
  await movies.deleteOne({ id });
};
