import { IOrderDetails } from "../../models/IOrderDetails";
import { IOrders } from "../../models/IOrders";

export interface IOrderDetailsState {
    orderDetails: IOrderDetails[] 
}

export const defaultOrderDetailsState: IOrderDetailsState = {
     orderDetails: []
}