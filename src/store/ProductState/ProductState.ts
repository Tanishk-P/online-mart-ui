import { IProduct } from "../../models/IProduct"

export interface IProductState {
    productList: IProduct[]
}

export const defaultProductState: IProductState = {
    productList: []
}