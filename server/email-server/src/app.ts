import * as Koa from "koa";
import * as HttpStatus from "http-status-codes";
import notificationsController from "../src/notifications/notifications.controller";
import bodyParser = require("koa-bodyparser");

const app: Koa = new Koa();

// Generic error handling middleware.
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status =
      error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit("error", error, ctx);
  }
});

app.use(bodyParser());

// Route middleware.
app.use(notificationsController.routes());
app.use(notificationsController.allowedMethods());

// Application error logging.
app.on("error", console.error);

export default app;
