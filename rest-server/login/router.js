import { Router } from "express";
import { authActiion } from "./controller.js";

export const router = Router();

router.post("/", authActiion);
