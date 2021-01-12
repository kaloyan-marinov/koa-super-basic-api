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

router.put("/user/:id", (ctx) => {
  const userId = ctx.params.id;
  const newData =
    ctx.request.body; /* not accessible if we don't `.use(bodyParser())` */
  ctx.body = Object.assign(users[userId], newData);
});

/*
Because the way that middleware works is sequentially,
in the next instruction it is important
to call `app.use(bodyParser())` before any of the other middleware [units].
*/
app.use(bodyParser()).use(router.allowedMethods()).use(router.routes());

app.listen(3000);
