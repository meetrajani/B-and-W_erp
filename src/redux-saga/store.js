import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootreducer";
import { rootindex } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootindex);

export default store;

