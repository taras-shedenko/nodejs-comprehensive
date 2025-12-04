import passport from "passport";
import login from "./views/login.js";

export const formAction = (req, res, next) => {
  res.send(login());
};

export const loginAction = passport.authenticate("local", {
  failureRedirect: "/login",
});

export const redirectAction = (req, res, next) => {
  res.redirect("/movie");
};
