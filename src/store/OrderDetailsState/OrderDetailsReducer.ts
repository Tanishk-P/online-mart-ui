import { ICustomAction } from "../../models/ICustomAction";
import { IOrderDetailsState, defaultOrderDetailsState } from "./OrderDetailsState";
import { GET_ORDERS } from "./OrderDetailsType";

export default function OrderDetailsReducer(state: IOrderDetailsState = defaultOrderDetailsState, action: ICustomAction<any>): IOrderDetailsState {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orderDetails: action?.data?.orders
            }
        default:
            return state
    }
}