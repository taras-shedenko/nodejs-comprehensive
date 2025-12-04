import * as memory from "./memory.js";
import * as sqlite from "./sqlite.js";
import * as mysql from "./mysql.js";
import * as sequelize from "./sequelize.js";
import * as redis from "./redis.js";
import * as mongodb from "./mongodb.js";

export default () => {
  if (process.env.model === "mongodb") return mongodb;
  if (process.env.model === "redis") return redis;
  if (process.env.model === "sequelize") return sequelize;
  if (process.env.model === "mysql") return mysql;
  if (process.env.model === "sqlite") return sqlite;
  return memory;
};
