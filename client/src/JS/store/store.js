import { applyMiddleware, compose, createStore } from "redux";
import { rootReducers } from "../reducers/index";
import thunk from "redux-thunk";

const compseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducers,
  compseEnhancer(applyMiddleware(thunk))
);
