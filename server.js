const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body");

const app = new Koa();
const router = new Router();

// Pretend the following list is a database.
let users = [
  {
    name: "Jacob",
    email: "info@geeklaunch.net",
  },
  {
    name: "Kenny",
    email: "kenny@example.net",
  },
  {
    name: "Joe",
    email: "joe@example.org",
  },
];

router.get("/user/:id", async (ctx) => {
  ctx.body = users[ctx.params.id];
});

app.use(router.allowedMethods()).use(router.routes()).use(bodyParser());

app.listen(3000);
