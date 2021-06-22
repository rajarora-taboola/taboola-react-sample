/**
 * Env URLs
 */
const protocol = "http://";
const protocolSecure = "https://";
const DEFAULT_PORT = 8080;

const LOCAL_URL = `${protocol}localhost:${DEFAULT_PORT}`;
const PROD_URL = `${protocolSecure}taboola-app.herokuapp.com`;

/**
 * taboola base URLs
 */
const API_CONNECT_URL = `${protocol}taboola-fe-test.herokuapp.com/api/v1/candidates`;
const baseURL = process.env.NODE_ENV == "development" ? LOCAL_URL : PROD_URL;

/**
 * API Service URLs
 */
const API_ENDPOINT_URL = `${baseURL}/endpoint/api/taboola`;

/**
 * Global constants
 */
const headerType = "application/json";
const timeout = 180000;
const endpointErrorMsg = "Something went wrong!";

/**
 * Exporting all constant globally
 */
module.exports = {
  baseURL,
  API_CONNECT_URL,
  API_ENDPOINT_URL,
  DEFAULT_PORT,
  timeout,
  headerType,
  endpointErrorMsg
};
