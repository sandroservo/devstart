import { combineReducers } from "redux";

import auth from "./auth/reducer";
import user from "./user/reducer";
import users from "./users/reducer";

export default combineReducers({
    auth,
    user,
    users,
});