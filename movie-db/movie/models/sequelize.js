import { Sequelize } from "sequelize";
import { getConnection } from "../../databases/sequelize.js";

let Movies;

const getMovies = async () => {
  const connection = await getConnection();
  if (Movies) return Movies;
  Movies = connection.define(
    "movies",
    {
      title: { type: Sequelize.STRING },
      year: { type: Sequelize.INTEGER },
    },
    { timestamps: false }
  );
  return Movies;
};

export const getAll = async () => {
  const Movies = await getMovies();
  const res = await Movies.findAll();
  return res;
};

export const get = async (id) => {
  const Movies = await getMovies();
  const res = await Movies.findByPk(id);
  return res;
};

export const insert = async (movie) => {
  const Movies = await getMovies();
  await Movies.upsert(movie);
};

export const update = insert;

export const remove = async (id) => {
  const Movies = await getMovies();
  await Movies.destroy({ where: { id } });
};
