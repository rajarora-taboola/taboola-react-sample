const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const cookiesMiddleware = require("universal-cookie-koa");
const next = require("next");
const apiRouter = require("./routes/api");
const routes = require("./routes/url");
const { DEFAULT_PORT } = require("./global.config");

/**
 * Development Env.
 */
const dev = process.env.NODE_ENV === "development";
const app = next({ dev });

/**
 * Configured URL routes with server
 * handler.
 */
const handle = routes.getRequestHandler(app);

/**
 * Server running port conf.
 */
const port = parseInt(process.env.PORT, 10) || DEFAULT_PORT;

/**
 * Disabled next.js header config.
 */
app.nextConfig.poweredByHeader = false;

app
  .prepare()
  .then(() => {
    const server = new Koa();
    const router = new Router();

    router.get("*", async ctx => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    });

    server
      .use(
        cors({
          origin: "*",
          allowMethods: [
            "GET",
            "PUT",
            "POST",
            "PATCH",
            "DELETE",
            "HEAD",
            "OPTIONS"
          ]
        })
      )
      .use(cookiesMiddleware())
      .use(async (ctx, next) => {
        await next();
      });

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      ctx.set("X-Frame-Options", "SAMEORIGIN");
      await next();
    });

    /* Main router middleware - should be used after other routes */
    server.use(apiRouter.routes());
    server.use(router.routes());
    server.use(router.allowedMethods());

    /* eslint-disable no-console */
    server.listen(port, err => {
      if (err) throw err;
      console.log(`DEV server running at http://localhost:${port}/`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
