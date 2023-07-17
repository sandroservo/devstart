import CreateSagaMiddleware from "redux-saga"
import { persistStore } from "redux-persist"

import persistReducer from "./persisteReducer"
import createStore from "./createStore"
import rootReducer from "./modules/rootReducer"
import rootSaga from "./modules/rootSaga"

const sagamMiddleware = CreateSagaMiddleware({ sagamMonitor : null})
const middlewares =  [sagamMiddleware]

const store =  createStore(persistReducer(rootReducer), middlewares);
const persistor =  persistStore(store);

sagamMiddleware.run(rootSaga);

export {store, persistor}