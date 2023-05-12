import { ICustomAction } from "../../models/ICustomAction";
import { IProductDetailState, defaultProductDetailsState } from "./ProductDetailsState";
import { GET_PRODUCT } from "./ProductDetailsTypes";

export default function ProductDetailsReducer( state: IProductDetailState = defaultProductDetailsState, action: ICustomAction<any>): IProductDetailState {
   switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                _id: action?.data._id,
                imageUrl: action?.data.imageUrl,
                name: action?.data.name,
                price: action?.data.price,
                description: action?.data.description,
                company: action?.data.company,
                category: action?.data.category
            }
        default: 
            return state
   }
}