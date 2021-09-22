import { UserTypes } from "./userType";

const INITIAL_STATE = {
    currentUser: {
    },
    token: '',
}

const UserReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserTypes.SET_CURRENT_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        
        default:
            return state;
    }
}
export default UserReduser;
