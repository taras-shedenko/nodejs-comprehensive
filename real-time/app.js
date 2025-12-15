import { join } from "path";
import express from "express";
import cookieSession from "cookie-session";
import router from "./router.js";
import initWs from "./websocket.js";

const app = express();

app.set("views", join(import.meta.dirname, "views"));
app.set("view engine", "pug");

app.use(cookieSession({ name: "session", keys: ["key1", "key2"] }));
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
initWs(app);

app.listen(3000, () => console.log("App is listening on 3000"));
