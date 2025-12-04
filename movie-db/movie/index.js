import { Router } from "express";
import {
  listAction,
  removeAction,
  formAction,
  saveAction,
} from "./controller.js";
const router = Router();

router.get("/", listAction);
router.get("/delete/:id", removeAction);
router.get("/form/:id", formAction);
router.get("/form", formAction);
router.post("/save", saveAction);

export default router;
