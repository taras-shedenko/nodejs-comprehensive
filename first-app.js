import { createServer } from "http";
import debug from "debug";

const log = debug("first-app");

const getRes = (name) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Node.js Demo</title>
  </head>
  <body>
    <h1 style="color: green;">Hi, ${name}!</h1>
  </body>
</html>`;

const server = createServer((req, res) => {
  debugger;
  log(`${req.method} ${req.url}`);
  const url = new URL(req.url, "http://localhost");
  const name = url.searchParams.get("name") ?? "Username";
  log(name);
  res.writeHead(200, { "content-type": "text/html; charset=utf=8" });
  res.end(getRes(name));
});

server.listen(3000, () => {
  console.log(`Server is listening to ${server.address().port}`);
});
