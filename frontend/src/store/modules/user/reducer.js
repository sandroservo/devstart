import produce from "immer";


const INITIAL_STATE = {
    data: null
}

export default function user(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    return produce(state, draft => {
        switch (type) {
            case "@autn/SIGN_IN_SUCCESS": {
                draft.data = payload.user;
                break;
            }

            case "@auth/SIGN_EXIT":{
                draft.data = null
                break;
            }

            default:
        }
    })
}