import axios from "axios";
import * as Koa from "koa";
import * as Router from "koa-router";

const routerOpts: Router.IRouterOptions = {
  prefix: "/notifications",
};

const router: Router = new Router(routerOpts);

router.post("/", async (ctx: Koa.Context) => {
  const SLACK_WEBHOOK_URL =
    "https://hooks.slack.com/services/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";

  const email = ctx.request.body.email;
  const product = ctx.request.query["product"];
  
  await axios.post(SLACK_WEBHOOK_URL, {
    text: `Hello, ${email} signed up for ${product}!`,
  });

  ctx.body = { result: email };
});

router.get("/ping", async (ctx: Koa.Context) => {
  ctx.body = "Ping";
});

export default router;
