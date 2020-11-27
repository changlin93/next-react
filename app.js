const koa = require("koa");
const Router = require("koa-router");
const next = require("next");

const dev = process.env !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new koa();

  server.use(async ({ req, res, respond }, next) => {
    await handle(req, res);
    respond = false;
  });

//   server.use(router.routes())
  const port = 3000;
  server.listen(port, () => console.log(`koa server listening on ${port}`));
});
