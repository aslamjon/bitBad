import { combineReducers } from "redux";
import UserReduser from "./user/userReducer";

const rootReducer = combineReducers({
    user: UserReduser,
});

export default rootReducer;