/**
 * Global taboola page routes URL.
 * (HINT): Make an entry of component name to create a new URL.
 */
const routes = require("next-routes");
const route = new routes();

/**
 * homePageRoute: home page custom route url
 */
route.add("index", "/");
route.add("page2", "/page2");
route.add("page3", "/page3");

module.exports = route;
