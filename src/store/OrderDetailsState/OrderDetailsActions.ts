import { Dispatch } from "redux";
import { ICustomAction } from "../../models/ICustomAction";
import { IOrders } from "../../models/IOrders";
import { ICustomResponse } from "../../models/ICustomResponse";
import { getOrderDetails } from "../../services/ApiActions";
import { GET_ORDERS } from "./OrderDetailsType";
import { SET_ERROR } from "../RootActionTypes";

export function OrderDetails() {
    return (dispatch: Dispatch<ICustomAction<IOrders[]>>) => {
        getOrderDetails().then((response: ICustomResponse<IOrders[]>) => {
            dispatch({
                type: GET_ORDERS,
                data: response?.data
            })
        }).catch(error => {
            dispatch({
                type: SET_ERROR,
                data: error?.response?.data?.data || 'Unable to get the order details'
            })
        })
    }
}