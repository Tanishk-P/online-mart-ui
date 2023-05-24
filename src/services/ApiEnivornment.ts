export const BASE_URL = "http://192.168.1.3:3000";
// export const BASE_URL = "http://localhost:3000";

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
    adminSales: string;
    editProduct: string;
    deleteProduct: string;
}

export const apiEnviornment: IApiEnvironment = {
    register: "/signup",
    login: "/login",
    getUserDetails: "/user/getUserDetails",
    productList: "/customer/products",
    products: "/products",
    addProducts: "/products/add-product",
    orderProduct: "/orders/accept-orders",
    orderDetails: "/orders/order-detail",
    productSearch: "/products/search/:key",
    adminSales: "/user/getAdminSellDetails",
    editProduct: "/products/product/:id",
    deleteProduct: "/products/product/:id"
};
