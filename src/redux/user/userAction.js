import { UserTypes } from "./userType" 

export const setCurrentUser = item => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: item
})