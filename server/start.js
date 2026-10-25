const http = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = Number(process.env.PORT) || 3000;

app.prepare().then(() => {
  http.createServer((request, response) => handle(request, response)).listen(port, (error) => {
    if (error) throw error;

    console.log(`> Ready on http://localhost:${port}`);
  });
});
