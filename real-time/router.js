import { Router } from "express";

const router = new Router();

const checkAuth = (req, res, next) => {
  if (req.session.user) next();
  else res.redirect("/login");
};

router.get("/", (req, res) => {
  res.redirect(req.session.user ? "/chat" : "/login");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/login", (req, res) => {
  if (req.body.password === "1234") {
    req.session.user = req.body.username;
    res.redirect("/chat");
  } else res.redirect("/login");
});
router.get("/chat", checkAuth, (req, res) => {
  res.render("chat", { user: req.session.user });
});
router.get("/logout", (req, res) => {
  delete req.session.user;
  res.redirect("/login");
});

export default router;
