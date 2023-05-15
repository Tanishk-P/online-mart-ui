import { IOrderDetailsState, defaultOrderDetailsState } from "./OrderDetailsState/OrderDetailsState";
import { IProductDetailState, defaultProductDetailsState } from "./ProductDetailsState/ProductDetailsState";
import { IProductState, defaultProductState } from "./ProductState/ProductState";
import { IUserDetailState, defaultUserState } from "./UserDetailsState/UserState";

export interface IAppState {
    userDetailState: IUserDetailState,
    productDetailState: IProductDetailState,
    productState: IProductState,
    orderDetailsState: IOrderDetailsState,
}

export const defaultAppState: IAppState = {
    userDetailState: defaultUserState,
    productDetailState: defaultProductDetailsState,
    productState: defaultProductState,
    orderDetailsState: defaultOrderDetailsState,
}