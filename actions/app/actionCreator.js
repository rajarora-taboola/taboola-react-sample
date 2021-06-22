import axios from "axios";
import * as action from "./action";
import { API_ENDPOINT_URL } from "../../global.config";

/**
 * @function initiatetaboolaApi
 * @description Will initiate taboola api listing from endpoint to store in global state.
 */
export function initiatetaboolaApi() {
  return dispatch => {
    dispatch(action.requesttaboolaApi());
    return axios.get(API_ENDPOINT_URL).then(
      json => {
        if (json.status === 200 && json.data && !json.data.error) {
          dispatch(action.receivetaboolaApi(json.data));
        } else {
          dispatch(action.failuretaboolaApi(json.data.error));
        }
      },
      err => {
        dispatch(action.failuretaboolaApi(err));
      }
    );
  };
}
