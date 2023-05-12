import { IProductDetailState, defaultProductDetailsState } from "./ProductDetailsState/ProductDetailsState";
import { IUserDetailState, defaultUserState } from "./UserDetailsState/UserState";

export interface IAppState {
    userDetailState: IUserDetailState,
    productDetailState: IProductDetailState,
}

export const defaultAppState: IAppState = {
    userDetailState: defaultUserState,
    productDetailState: defaultProductDetailsState
}