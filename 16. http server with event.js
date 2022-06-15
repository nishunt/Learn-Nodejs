const http = require("http");

// conventional method
// const server = http.createServer((req, res) => {
//   res.end("welcome");
// });

// setting up a server using event emitter api:
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("welcome");
});

// listen
server.listen(5000);
