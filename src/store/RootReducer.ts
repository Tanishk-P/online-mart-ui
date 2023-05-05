import { combineReducers } from "redux";
import UserDetailsReducer from "./UserDetailsState/UserDetailsReducer";

const rootReducer = combineReducers({
    // user: userReducer,
    // products: productReducer
    userDetailState: UserDetailsReducer,
});

export default rootReducer;