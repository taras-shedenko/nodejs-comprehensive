import { Server } from "http";
// import { createSecureServer } from "http2";
import { readFileSync, readFile } from "fs";
import { join } from "path";
import formidable from "formidable";
import { deleteById, save } from "./data.js";
import { getList, getForm } from "./templates.js";

// openssl genrsa -out localhost.key 2048
// MSYS2_ARG_CONV_EXCL='/CN' openssl req -new -x509 -key localhost.key -out localhost.cert -days 9999 -subj '/CN=localhost'
const serverOptions = {
  key: readFileSync("./localhost.key"),
  cert: readFileSync("./localhost.cert"),
  allowHTTP1: true,
};

const requestHandler = (req, res) => {
  if (req.url === "/styles.css") {
    readFile(
      join(import.meta.dirname, "static", "styles.css"),
      "utf8",
      (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end();
        } else res.end(data);
      }
    );
  } else if (req.url.startsWith("/uploads")) {
    readFile(join(import.meta.dirname, req.url), (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end();
      } else res.end(data);
    });
  } else if (req.url.startsWith("/save") && req.method == "POST") {
    formidable({
      allowEmptyFiles: true,
      minFileSize: 0,
      keepExtensions: true,
      uploadDir: join(import.meta.dirname, `uploads`),
      createDirsFromUploads: true,
      filename: (name, ext) => name + ext,
    })
      .parse(req)
      .then(([fields, files]) => {
        for (let key in fields) fields[key] = fields[key].join();
        if (files.file)
          fields.file = files.file.map(({ newFilename }) => newFilename).join();
        save(fields);
        res.writeHead(302, { location: "/", "content-type": "text/plain" });
        res.end();
      })
      .catch((err) => {
        res.writeHead(err.httpCode || 400, { "content-type": "text/plain" });
        res.end(err.message);
      });
  } else if (req.url.startsWith("/delete")) {
    deleteById(req.url.split("/")[2]);
    res.writeHead(302, { location: "/", "content-type": "text/html" });
    res.end();
  } else if (req.url.startsWith("/new")) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(getForm());
  } else if (req.url.startsWith("/edit")) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(getForm(req.url.split("/")[2]));
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(getList());
  }
};

const server = new Server();
server.on("request", requestHandler);
server.listen(3000, () => console.log("Server is listening to 3000"));

// createSecureServer(serverOptions, requestHandler).listen(3000, () =>
//   console.log("Server is listening to 3000")
// );
