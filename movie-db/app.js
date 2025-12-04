import { createWriteStream, readFileSync } from "fs";
import { join } from "path";
// import { createServer } from "https";
import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { ensureLoggedIn } from "connect-ensure-login";
import auth from "./auth.js";
import loginRouter from "./login/index.js";
import movieRouter from "./movie/index.js";

const app = express();

if (process.env.template === "pug") app.set("view engine", "pug");
if (process.env.template === "hbs") {
  app.engine(".hbs", engine({ extname: ".hbs", defaultLayout: false }));
  app.set("view engine", ".hbs");
}

app.use(morgan("dev"));
app.use(
  morgan("common", {
    immidiate: true,
    stream: createWriteStream("access.log", { flags: "a" }),
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(import.meta.dirname, "public")));

auth(app);

app.use("/login", loginRouter);
app.use("/movie", ensureLoggedIn("/login"), movieRouter);
app.get("/", (req, res) => {
  res.redirect("/movie");
});

app.use((err, req, res, next) => {
  console.error("ERR:\n", err);
});

app.listen(3000, () => console.log("App is listening on 3000"));

// createServer(
//   {
//     key: readFileSync("./localhost.key"),
//     cert: readFileSync("./localhost.cert"),
//   },
//   app
// ).listen(3000, () => console.log("App is listening on 3000"));
