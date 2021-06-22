const request = require("request");
const { API_CONNECT_URL, timeout, headerType } = require("../../global.config");

module.exports = {
  /**
   * @function doConnectApi
   * @description Wrapper to call doConnectApi URL's response.
   */
  doConnectApi: methodType => {
    const requestObj = {
      uri: API_CONNECT_URL,
      method: methodType || "GET",
      gzip: true,
      timeout: timeout,
      headers: {
        "Content-Type": headerType
      }
    };

    console.log("\n\n\n");
    console.log("--------------API BODY--------------");
    console.log("\nParams: ", requestObj, "\n\n");
    console.log("--------------API BODY--------------");

    return new Promise(function(resolve, reject) {
      request.get(requestObj, function(err, res, body) {
        if (err) {
          reject(err);
        } else {
          resolve(body);
          console.log("\n\n\n");
          console.log("--------------API RESPONSE BODY--------------");
          console.log("\nResponse: ", body, "\n\n");
          console.log("--------------API RESPONSE BODY--------------");
        }
      });
    });
  }
};
