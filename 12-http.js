const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page ku aapana ku swagat");
  } else if (req.url === "/about") {
    res.end("ea hauchi aamara itihasa");
  } else {
    res.end(`<h1>Shittt...</h1>
        <p>aapana khojuthiba file nahi</p>
        <a href="/">Home ku palantu</a>
        `);
  }
});
server.listen(8080, () => {
  console.log("server start hela...");
});
