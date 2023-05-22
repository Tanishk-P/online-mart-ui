import { ICustomAction } from "../../models/ICustomAction";
import { GET_PRODUCTS } from "./ProductActionTypes";
import { IProductState, defaultProductState } from "./ProductState";

export default function ProductReducer(state: IProductState = defaultProductState, action: ICustomAction<any>): IProductState {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                productList: action?.data
            }
        default:
            return state
    }
}