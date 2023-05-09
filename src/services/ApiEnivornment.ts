export const BASE_URL = "https://1b03-59-95-138-208.ngrok-free.app";

interface IApiEnvironment {
    register: string;
    login: string;
    getUserDetails: string;
    productList: string;
    products: string;
    addProducts: string;
}

export const apiEnviornment: IApiEnvironment = {
    // LOGIN & REGISTER
    register: "/signup",
    login: "/login",
    // USER DETAILS
    getUserDetails: "/user/getUserDetails",
    // PRODUCTS 
    productList: "/customer/products",
    products: "/products",
    addProducts: "/products/add-products"
    



}

// products 

// products/add-product --> put
// products/products
// products/products/:id --> get
// products/place-order --> post