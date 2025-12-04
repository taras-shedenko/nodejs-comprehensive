import * as memory from "./memory.js";
import * as mysql from "./mysql.js";

export default () => {
  if (process.env.model === "mysql") return mysql;
  return memory;
};
