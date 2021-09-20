import { UserTypes } from "./userType";

const INITIAL_STATE = {
    currentUser: {
        is_admin: false,
        token: '',
        user: {
            balance: 0,
            phone_number: "915411998",
            full_name: "Aslamjon",
            card_number: null
        }
    }
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
