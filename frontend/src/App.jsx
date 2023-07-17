import { Provider  } from "react-redux"
import  {PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"

export function App() {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <h1>Welcome System</h1>
        </PersistGate>

    </Provider>
  )
}


