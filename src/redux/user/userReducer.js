import { UserTypes } from "./userType";

const INITIAL_STATE = {
    currentUser: {}
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
export default UserReduser;
