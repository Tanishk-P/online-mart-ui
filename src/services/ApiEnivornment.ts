export const BASE_URL = "http://192.168.1.7:3000";

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