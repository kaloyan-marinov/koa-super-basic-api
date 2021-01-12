const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-body");

const app = new Koa();
const router = new Router();

app.use(router.allowedMethods()).use(router.routes()).use(bodyParser());

app.listen(3000);
