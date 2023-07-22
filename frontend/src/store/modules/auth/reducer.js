import produce from "immer";


const INITIAL_STATE = {
    signed: false,
    token:null,
    loading: false,
    signedFailured:false
}

export default function auth(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    return produce(state, draft => {
        switch(type) {
            case "@auth/AUTH_IN_RESQUEST":{
                draft.loading = true;
                break;
            }

            case "@auth/AUTH_IN_SUCCESS":{
                draft.signed = true;
                draft.token = payload.token;
                draft.signedFailured = false;
                draft.loading = false;
                break;
            }

            case "@auth/AUTH_IN_FAILURE":{
                draft.loading = false;
                draft.signedFailured =true;
                break;

             }

            case "@auth/AUTH_IN_EXIT":{
                draft.signed = false;
                draft.token = null;
                draft.signedFailured = false;
                break;
            }

            default:
        }
    })
}