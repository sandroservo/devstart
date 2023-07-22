import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

export default (reducers) => {
    return persistReducer({
        key: 'servo-informatica',
        storage,
        whitelist: ["auth", "user"],
        },
        reducers
    );
};