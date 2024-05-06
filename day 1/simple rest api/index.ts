/** @format */
import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/api" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      //   res.write("welcome to simple rest api");
      res.end(" welcome to simple rest api");
    } else if (req.url === "/api" && req.method === "POST") {
      res.writeHead(200, { "Content-Type": "application/json" });
      //   res.write("welcome to simple rest api");
      res.end(" welcome to simple rest api");
    } else if (req.url === "/api" && req.method === "DELETE") {
      res.writeHead(200, { "Content-Type": "application/json" });
      //   res.write("welcome to simple rest api");
      res.end(" welcome to simple rest api");
    }
    if (req.url === "/api" && req.method === "PATCH") {
      res.writeHead(200, { "Content-Type": "application/json" });
      //   res.write("welcome to simple rest api");
      res.end(" welcome to simple rest api");
    }
  }
);

server.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`);
});
