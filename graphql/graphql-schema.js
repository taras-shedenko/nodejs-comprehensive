import { buildSchema } from "graphql";
import { getAll, get, insert, update, remove } from "./models/movie.js";

export const schema = buildSchema(`
  type Movie {
    id: Int!
    title: String
    year: Int
    author: Int
    ispublic: Int
  }
  input MovieInput {
    title: String
    year: Int
    author: Int
    ispublic: Int
  }
  type Query {
    movies: [Movie]
    movie (id: Int): Movie
  }
  type Mutation {
    createMovie (movie: MovieInput): Movie
    updateMovie (id: Int, movie: MovieInput): Movie
    deleteMovie (id: Int): Boolean
  }
`);

export const rootValue = {
  movies() {
    return getAll();
  },
  movie({ id }) {
    return get(id);
  },
  async createMovie({ movie }) {
    const id = await insert({ ...movie, author: 1 });
    return get(id);
  },
  async updateMovie({ id, movie }) {
    await update(id, { ...movie, author: 1 });
    return get(id);
  },
  async deleteMovie({ id }) {
    const count = await remove(id);
    return count > 0;
  },
};
