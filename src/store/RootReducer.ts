import { combineReducers } from "redux";
import UserDetailsReducer from "./UserDetailsState/UserDetailsReducer";
import ProductDetailsReducer from "./ProductDetailsState/ProductDetailsReducer";
import ProductReducer from "./ProductState/ProductReducer";
import OrderDetailsReducer from "./OrderDetailsState/OrderDetailsReducer";

const rootReducer = combineReducers({
    userDetailState: UserDetailsReducer,
    productDetailState: ProductDetailsReducer,
    productState: ProductReducer,
    orderDetailsState: OrderDetailsReducer,
});

export default rootReducer;