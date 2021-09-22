import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    UserReduser,
    TokenReducer
} from "./user/userReducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
}


const rootReducer = combineReducers({
    user: UserReduser,
    token: TokenReducer
});

export default persistReducer(persistConfig, rootReducer);