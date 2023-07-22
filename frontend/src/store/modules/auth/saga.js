import { all, takeLatest, put, call } from "redux-saga/effects"

import jwt_decode from "jwt-decode"
import { api } from "../../../services/api"
import { authInSuccess, authInFailure, exitIn } from "./actions"
import { toast } from "react-hot-toast"


function* authIn({ payload }) {
    const { email, password } = payload

    try {
        const response = yield call(api.post, "/login", { email, password });

        try {
            const validate = yield call(api.post, "/validate", { token: response.data.token })

            const user = validate.data

            api.defaults.headers.Authorization = `Bearer ${response.data.token}`
            yield put(authInSuccess(response.data.token, user));
            //toast.error("Usuário e/ou  senha incorretos")
        } catch (error) {
            
            yield put(authInFailure())
            toast.error("Usuário e/ou  senha incorretos")
        }

    } catch (e) {
        
        yield put(authInFailure())
        toast.error("Usuário e/ou  senha incorretos")
    }
}

function* setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        const { exp: tokenExpiration } = jwt_decode(token);
        if (tokenExpiration <= Math.floor(Date.now() / 1000)) {
            return yield put(exitIn)
        }

        api.defaults.headers.Authoriazation = `Bearer ${token}`
    }

}

export default all([
    takeLatest("@auth/AUTH_IN_RESQUEST", authIn),
    takeLatest("persit/REHYDRATE", setToken)
])