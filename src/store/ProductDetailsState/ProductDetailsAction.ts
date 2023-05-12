import { Dispatch } from "redux";
import { ICustomAction } from "../../models/ICustomAction";
import { IProduct } from "../../models/IProduct";
import { getProductById } from "../../services/ApiActions";
import { ICustomResponse } from "../../models/ICustomResponse";
import { GET_PRODUCT } from "./ProductDetailsTypes";
import { SET_ERROR } from "../RootActionTypes";

export function ProductDetails(productId: string) {
    return (dispatch : Dispatch<ICustomAction<IProduct>>) => {
        getProductById(productId).then((response: ICustomResponse<IProduct>) => {
            dispatch({
                type: GET_PRODUCT,
                data: response?.data
            })
        }).catch((error => {
            dispatch({
                type: SET_ERROR,
                data: error?.response?.data?.data || 'Unable to get the product details'
            })
        }))
    }
}