import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import Immutable from "seamless-immutable";
import rootReducer from "./reducers";

/**
 * NODE Env.
 */
const dev = process.env.NODE_ENV === "development";
const windowExist = typeof window === "object";

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  dev && windowExist && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

/* eslint-enable */
export function configureStore(initialState = {}) {
  /* eslint-disable no-param-reassign */
  if (!Immutable.isImmutable(initialState))
    initialState = Immutable(initialState);

  /* eslint-enable */
  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
}

export default configureStore;
