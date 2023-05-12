import { combineReducers } from "redux";
import UserDetailsReducer from "./UserDetailsState/UserDetailsReducer";
import ProductDetailsReducer from "./ProductDetailsState/ProductDetailsReducer";

const rootReducer = combineReducers({
    // user: userReducer,
    // products: productReducer
    userDetailState: UserDetailsReducer,
    productDetailState: ProductDetailsReducer,
});

export default rootReducer;