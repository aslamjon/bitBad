import { UserTypes } from "./userType";

const INITIAL_STATE = {
    currentUser: {
    },
}
const INITIAL_STATE_OF_TOEKN = {
    token: ''
}
const UserReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        
        default:
            return state;
    }
}
const TokenReducer = (state = INITIAL_STATE_OF_TOEKN, action) => {
    switch (action.type) {
        case UserTypes.SET_CURRENT_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}
export {
    UserReduser,
    TokenReducer
}

