import { WebSocketServer } from "ws";

export default (app) => {
  const wss = new WebSocketServer({ port: 3030 });
  const connections = [];
  wss.on("connection", (conn) => {
    connections.push(conn);
    conn.on("message", (msg) =>
      connections.forEach((conn) => conn.send && conn.send(msg))
    );
  });
};
