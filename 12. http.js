const http = require("http");
const server = http.createServer((req, res) => {
  // request is what's coming in
  // response is what we send out
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("This is our glorious history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page</p>
  <a href="/">back home`);
});

server.listen(5000);
