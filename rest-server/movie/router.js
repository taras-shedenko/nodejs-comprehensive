import { Router } from "express";
import { param, checkSchema } from "express-validator";
import {
  getAllAction,
  getOneAction,
  createAction,
  updateAction,
  removeAction,
} from "./controller.js";

const schema = checkSchema({
  title: {
    isString: true,
    isLength: {
      errorMessage: "Title has to be between 1 and 20",
      options: { min: 1, max: 20 },
    },
    errorMessage: "Title is invalid",
  },
  year: { isInt: true, errorMessage: "Year is invalid" },
});

export const router = Router();

router.get("/", getAllAction);
router.get("/:id", param("id").isInt(), getOneAction);
router.post("/", schema, createAction);
router.put("/:id", param("id").isInt(), schema, updateAction);
router.delete("/:id", param("id").isInt(), removeAction);
