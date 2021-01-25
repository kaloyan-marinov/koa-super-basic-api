const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body");

const app = new Koa();
const router = new Router();

// Pretend the following list is a database.
let users = {
  1: {
    id: 1,
    username: "jd-user",
    name: "John Doe",
    email: "john.doe@gmail.com",
    password: "123",
  },
  2: {
    id: 2,
    username: "user-ms",
    name: "Mary Smith",
    email: "mary.smith@yahoo.com",
    password: "789",
  },
};

router.get("/users/:id", async (ctx) => {
  const { id, name, username, password, email } = users[ctx.params.id];
  ctx.body = { id, username };
});

router.put("/users/:id", (ctx) => {
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
