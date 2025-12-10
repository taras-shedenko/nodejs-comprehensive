import { validationResult } from "express-validator";
import jsontoxml from "jsontoxml";
import { getErrorMessage } from "../utils.js";
import { getAll, getOne, insert, update, remove } from "./model.js";

export const getAllAction = async (req, res) => {
  try {
    const sort = req.query.sort;
    const data = await getAll(req.auth.id, sort);
    res.format({
      json() {
        res.json(data);
      },
      xml() {
        res.send(jsontoxml(data.map((movie) => ({ movie }))));
      },
    });
  } catch (e) {
    res.status(500).send(getErrorMessage(e));
  }
};

export const getOneAction = async (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length) return res.status(400).json(errors);
  try {
    const id = parseInt(req.params.id);
    const data = await getOne(id);
    if (!data) res.status(404).send(`Movie with ID ${id} not found`);
    res.json(data);
  } catch (e) {
    res.status(500).send(getErrorMessage(e));
  }
};

export const createAction = async (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length) return res.status(400).json(errors);
  try {
    const { body } = req;
    const movie = {
      title: body.title,
      year: body.year,
      author: req.auth.id,
      ispublic: body.ispublic ?? 1,
    };
    const insertId = await insert(movie);
    const newMovie = await getOne(insertId);
    res.status(201).json(newMovie);
  } catch (e) {
    res.status(500).send(getErrorMessage(e));
  }
};

export const updateAction = async (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length) return res.status(400).json(errors);
  try {
    const { id } = req.params;
    const { body } = req;
    const movie = {
      title: body.title,
      year: body.year,
      author: req.auth.id,
      ispublic: body.ispublic ?? 1,
    };
    await update(id, movie);
    const newMovie = await getOne(id);
    res.json(newMovie);
  } catch (e) {
    res.status(500).send(getErrorMessage(e));
  }
};

export const removeAction = async (req, res) => {
  const { errors } = validationResult(req);
  if (errors.length) return res.status(400).json(errors);
  const { id } = req.params;
  await remove(id, req.auth.id);
  res.sendStatus(204);
};
