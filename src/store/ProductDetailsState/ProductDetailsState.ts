export interface IProductDetailState {
    _id: string;
    _userId?: string;
    price: string;
    name: string;
    description: string;
    company: string;
    category?: string;
    imageUrl: string;
}

export const defaultProductDetailsState: IProductDetailState = {
   _id: '',
   price: '',
   name: '',
   description: '',
   company: '',
   imageUrl: '',
   _userId: '',
   category: ''
}