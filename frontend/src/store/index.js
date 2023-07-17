import CreateSagaMiddleware from "redux-saga"
import { persistStore } from "redux-persist"

import persistReducer from "./persisteReducer"
import createStore from "./createStore"