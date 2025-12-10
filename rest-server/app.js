import express from "express";
import morgan from "morgan";
import { expressjwt } from "express-jwt";
import swaggerJSdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { router as LoginRouter } from "./login/router.js";
import { router as MovieRouter } from "./movie/router.js";
import "./mysql.js";
import { getErrorMessage } from "./utils.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/login", LoginRouter);
app.use(
  "/movies",
  expressjwt({ secret: "secret", algorithms: ["HS256"] }),
  MovieRouter
);

const swaggerSetup = swaggerJSdoc({
  swaggerDefinition: {
    info: {
      title: "Movie DB API",
      version: "1.0.0",
      description: "API of the movie database",
    },
    host: "localhost:3000",
    baseUrl: "/",
  },
  apis: ["./**/swaggerDoc.js"],
});

app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerSetup));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(getErrorMessage(err));
});

app.listen(3000, () => console.log("App is listening on 3000"));
