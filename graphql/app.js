import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { expressjwt } from "express-jwt";
import { schema, rootValue } from "./graphql-schema.js";

const app = express();
app.all(
  "/graphql",
  expressjwt({ secret: "secret", algorithms: ["HS256"] }),
  createHandler({ schema, rootValue })
);
app.listen(3000, () => console.log("App is listening on 3000"));
