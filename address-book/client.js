import { connect, constants } from "http2";
import { readFileSync } from "fs";
import { load } from "cheerio";

const { HTTP2_HEADER_PATH } = constants;

const client = connect("https://localhost:3000", {
  ca: readFileSync("./localhost.cert"),
});
client.on("error", (err) => console.error(`ERR:\n`, err));

let body = "";
const req = client.request({ [HTTP2_HEADER_PATH]: "/" });
req.setEncoding("utf8");
req.on("data", (chunk) => (body += chunk));
req.on("end", () => {
  const $ = load(body);
  const addresses = [];
  for (let tr of $("table tbody tr")) {
    addresses.push({
      id: tr.children[1].children[0]?.data ?? "",
      firstname: tr.children[5].children[0]?.data ?? "",
      lastname: tr.children[7].children[0]?.data ?? "",
      street: tr.children[9].children[0]?.data ?? "",
      city: tr.children[11].children[0]?.data ?? "",
      country: tr.children[13].children[0]?.data ?? "",
    });
  }
  console.log("ADDRESSES:\n", addresses);
});
req.end();
