import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules";
import sagas from "./sagas";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const applyableMiddleware = [sagaMiddleware];
  const boundMiddleware = bindMiddleware(...applyableMiddleware);
  const store = createStore(rootReducer, initialState, boundMiddleware);

  store.sagaTask = sagaMiddleware.run(sagas);

  return store;
}

export default configureStore;
