const { doConnectApi } = require("./auth/doConnectApi");
const { endpointErrorMsg } = require("../global.config");

module.exports = {
  /**
   * @function taboolaCallApi
   * @description Wrapper to call taboolaCallApi from auth.
   *
   */
  taboolaCallApi: async ctx => {
    const response = await doConnectApi();
    if (JSON.parse(response).data === null) {
      ctx.body = endpointErrorMsg;
    } else {
      ctx.body = response;
    }
  }
};
