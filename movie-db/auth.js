import { createHash } from "crypto";
import passport from "passport";
import expressSession from "express-session";
import LocalStrategy from "passport-local";
import getModel from "./login/models/getModel.js";

const { getById, getByUsername } = getModel();

export default function (app) {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => done(null, await getById(id)));
  app.use(
    expressSession({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
    })
  );
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const hash = createHash("md5");
      const user = await getByUsername(username);
      if (user && user.password === hash.update(password).digest("hex"))
        done(null, user);
      else done(null, false);
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  });
}
