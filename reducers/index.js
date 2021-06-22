/**
 * Global state root reducer
 */
import { combineReducers } from "redux";
import listingInfoReducer from "../reducers/app";

export default () => {
  const rootReducer = combineReducers({
    listingInfo: listingInfoReducer
  });

  return rootReducer;
};
