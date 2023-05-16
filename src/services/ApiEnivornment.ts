export const BASE_URL = "http://192.168.1.3:3000";

interface IApiEnvironment {
    register: string;
    login: string;
    getUserDetails: string;
    productList: string;
    products: string;
    addProducts: string;
    orderProduct: string;   
    orderDetails: string;
    productSearch: string;
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
    addProducts: "/products/add-product",
    orderProduct: "/orders/accept-orders",
    orderDetails: "/orders/order-detail",
    productSearch: "/products/search/:key"


}

// products 

// products/add-product --> put
// products/products
// products/products/:id --> get
// products/place-order --> post