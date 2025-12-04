import { join } from "path";
import getModel from "./models/getModel.js";
import list from "./views/list.js";
import form from "./views/form.js";

const { getAll, insert, update, get, remove } = getModel();

export const listAction = async (req, res) => {
  const movies = await getAll(req.user.id);
  if (["pug", "hbs"].includes(process.env.template))
    res.render(join(import.meta.dirname, "views", "list"), { movies });
  else res.send(list(movies, req.user.name));
};

export const formAction = async (req, res) => {
  const movie = req.params.id
    ? await get(req.params.id)
    : { id: "", title: "", year: "", ispublic: "" };
  if (["pug", "hbs"].includes(process.env.template))
    return res.render(join(import.meta.dirname, "views", "form"), { movie });
  res.send(form(movie, req.user.name));
};

export const saveAction = async (req, res) => {
  try {
    req.body.author = req.user.id;
    req.body.ispublic = req.body.ispublic === "on" ? 1 : 0;
    if (req.body.id) await update(req.body);
    else {
      delete req.body.id;
      await insert(req.body);
    }
    res.redirect(req.baseUrl);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

export const removeAction = async (req, res) => {
  await remove(req.params.id);
  res.redirect(req.baseUrl);
};
