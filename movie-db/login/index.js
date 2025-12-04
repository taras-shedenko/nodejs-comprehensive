import { Router } from "express";
import { formAction, loginAction, redirectAction } from "./controller.js";

const router = new Router();

router.get("/", formAction);
router.post("/", loginAction, redirectAction);

export default router;
