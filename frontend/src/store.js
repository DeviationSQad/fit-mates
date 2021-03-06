import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialStore = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialStore,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);

export default store;
