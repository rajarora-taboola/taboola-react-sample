/**
 * Global API endpoint URL conf.
 */
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const { taboolaCallApi } = require("../../controllers");

/**
 * Router with global prefix declaration
 */
const router = new Router({ prefix: "/endpoint/api" });

/**
 * taboola auth endpoint api route
 * API Route URL:
 * http://(host:port)/endpoint/api/taboola
 */
router.get("/taboola", bodyParser(), async ctx => {
  await taboolaCallApi(ctx);
});

module.exports = router;
