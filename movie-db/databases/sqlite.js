import { join } from "path";
import sqlite3 from "sqlite3";

export const database = new sqlite3.Database(
  join(import.meta.dirname, "movie.db")
);
