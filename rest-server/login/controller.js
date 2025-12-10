import { createHash } from "crypto";
import jwt from "jsonwebtoken";
import { getErrorMessage } from "../utils.js";
import { getByUsername } from "./model.js";

export const authActiion = async (req, res) => {
  try {
    const hash = createHash("md5");
    const { username, password } = req.body;
    const user = await getByUsername(username);
    if (user && user.password === hash.update(password).digest("hex")) {
      const payload = { id: user.id, username: user.username, name: user.name };
      const token = jwt.sign(payload, "secret");
      res.json({ token });
    } else res.sendStatus(401);
  } catch (e) {
    res.status(500).send(getErrorMessage(e));
  }
};
