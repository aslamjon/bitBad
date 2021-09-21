import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReduser from "./user/userReducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}


const rootReducer = combineReducers({
    user: UserReduser,
});

export default persistReducer(persistConfig, rootReducer);