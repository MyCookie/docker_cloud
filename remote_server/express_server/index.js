const express = require("express");

const server = express();
const port = 8080;

server.get("/", (req, res) => {
  res.send(JSON.stringify({ Greeting: "Hello, world!" }));
});

server.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
