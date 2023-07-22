import CreateSagaMiddleware from "redux-saga"
import { persistStore } from "redux-persist"

import persistReducer from "./persisteReducer"
import createStore from "./createStore"
import rootReducer from "./modules/rootReducer"
import rootSaga from "./modules/rootSaga"

const sagaMiddleware = CreateSagaMiddleware({ sagaMonitor : null})
const middlewares =  [sagaMiddleware]

const store =  createStore(persistReducer(rootReducer), middlewares);
const persistor =  persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor}