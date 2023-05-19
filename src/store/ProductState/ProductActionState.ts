import { Dispatch } from "redux";
import { getAllProducts } from "../../services/ApiActions";
import { ICustomAction } from "../../models/ICustomAction";
import { IProduct } from "../../models/IProduct";
import { SET_ERROR } from "../RootActionTypes";
import { ICustomResponse } from "../../models/ICustomResponse";
import { GET_PRODUCTS } from "./ProductActionTypes";

export function Products() {
    return (dispatch: Dispatch<ICustomAction<IProduct[]>>) => {
        getAllProducts().then((response: ICustomResponse<IProduct[]>) => {
            dispatch({
                type: GET_PRODUCTS,
                data: response?.data
            })
        }).catch(error => {
            dispatch({
                type: SET_ERROR,
                data: error?.response?.data?.data || 'Unable to get the products'
            })
        })
    }
}