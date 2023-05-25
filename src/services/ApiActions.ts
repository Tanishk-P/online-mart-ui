import axios, { AxiosResponse } from "axios"
import { ICustomResponse } from "../models/ICustomResponse"
import { ILoginResult } from "../models/ILoginResult"
import { BASE_URL, apiEnviornment } from "./ApiEnivornment"
import { IUser } from "../models/IUser"
import { IIntegration } from "../models/IIntegration"
import { IProduct } from "../models/IProduct"
import { IOrders } from "../models/IOrders"
import { IOrderDetails } from "../models/IOrderDetails"
import { ISales } from "../models/ISales"
import { IDataType } from "../models/IDatatype"

export function login(email: string, password: string): Promise<ICustomResponse<ILoginResult>> {
    return new Promise<ICustomResponse<ILoginResult>>(function (resolve, reject) {
        axios({
            url: BASE_URL + apiEnviornment.login,
            data: {
                email,
                password
            },
            method: 'POST'
        }).then((response: AxiosResponse<ICustomResponse<ILoginResult>>) => {
            const accessAuth = response.data.data.accessAuth;
            localStorage.setItem('authToken', accessAuth);
            resolve(response.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function register(email: string, name: string, contact: number, password: string): Promise<ICustomResponse<IIntegration>> {
    return new Promise<ICustomResponse<IIntegration>>(function (resolve, reject) {
        axios({
            url: BASE_URL + apiEnviornment.register,
            data: {
                email,
                name,
                contact,
                password
            },
            method: 'POST'
        }).then((response: AxiosResponse<ICustomResponse<IIntegration>>) => {
            const accessAuth = response.data.data.accessAuth;
            localStorage.setItem('authToken', accessAuth);
            resolve(response.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function getUserDetails(): Promise<ICustomResponse<IUser>> {
    return new Promise<ICustomResponse<IUser>>(function (resolve, reject) {
        axios({
            headers: {
                Authorization: localStorage.getItem('authToken')
            },
            url: BASE_URL + apiEnviornment.getUserDetails,
            method: 'GET'
        }).then((response: AxiosResponse<ICustomResponse<IUser>>) => {
            resolve(response.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function getAllProducts(): Promise<ICustomResponse<IProduct[]>> {
    return new Promise<ICustomResponse<IProduct[]>>(function (resolve, reject) {
        axios({
            url: BASE_URL + apiEnviornment.productList,
            method: 'GET'
        }).then((response: AxiosResponse<ICustomResponse<IProduct[]>>) => {
            resolve(response.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function getProductById(_id: string): Promise<ICustomResponse<IProduct>> {
    return getAllProducts()
        .then(({ data: products }) => {
            const product = products.find((p) => p._id === _id);
            if (product) {
                const customResponse: ICustomResponse<IProduct> = {
                    success: true,
                    data: product,
                    error: undefined,
                };
                return Promise.resolve(customResponse);
            } else {
                return Promise.reject(new Error(`Product with ID ${_id} not found`));
            }
        })
        .catch((error) => Promise.reject(error));
}


export function orderProduct(productId: string, quantity: number, totalAmount: string, productName: string): Promise<ICustomResponse<IOrders>> {
    return new Promise<ICustomResponse<IOrders>>(function (resolve, reject) {
        axios({
            headers: { Authorization: localStorage.getItem("authToken") },
            url: BASE_URL + apiEnviornment.orderProduct,
            data: {
                productId,
                quantity,
                totalAmount,
                productName
            },
            method: "POST"
        }).then((response: AxiosResponse<ICustomResponse<IOrders>>) => {
            resolve(response?.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function getOrderDetails(): Promise<ICustomResponse<IOrderDetails[]>> {
    return new Promise<ICustomResponse<IOrderDetails[]>>(function (resolve, reject) {
        axios({
            headers: { Authorization: localStorage.getItem("authToken") },
            baseURL: BASE_URL + apiEnviornment.orderDetails,
            method: 'GET'
        }).then((response: AxiosResponse<ICustomResponse<IOrderDetails[]>>) => {
            resolve(response?.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function searchProducts(key: string): Promise<ICustomResponse<IProduct[]>> {
    return new Promise<ICustomResponse<IProduct[]>>(function (resolve, reject) {
        axios({
            headers: { Authorization: localStorage.getItem("authToken") },
            baseURL: BASE_URL + apiEnviornment.productSearch.replace(":key", key),
            method: 'GET'
        }).then((response: AxiosResponse<ICustomResponse<IProduct[]>>) => {
            resolve(response?.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function addProducts(productDetails: IProduct): Promise<ICustomResponse<IProduct>> {
    return new Promise<ICustomResponse<IProduct>>(function (resolve, reject) {
        axios({
            headers: { Authorization: localStorage.getItem("authToken") },
            url: BASE_URL + apiEnviornment.addProducts,
            data: {
                ...productDetails
            },
            method: "POST"
        }).then((response: AxiosResponse<ICustomResponse<IProduct>>) => {
            resolve(response?.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function getAdminSales(startDate: string, endDate: string): Promise<ICustomResponse<ISales[]>> {
    return new Promise<ICustomResponse<ISales[]>>(function (resolve, reject) {
        axios({
            headers: { Authorization: localStorage.getItem("authToken") },
            params: { startDate: startDate, endDate: endDate },
            url: BASE_URL + apiEnviornment.adminSales,
            method: "GET"
        }).then((response: AxiosResponse<ICustomResponse<ISales[]>>) => {
            resolve(response?.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function editProduct(productDetails: IDataType): Promise<ICustomResponse<IProduct>> {
    return new Promise<ICustomResponse<IProduct>> (function(resolve, reject) {
        axios({
            headers: { Authorization: localStorage.getItem("authToken") },
            url: BASE_URL + apiEnviornment.editProduct.replace(":id", productDetails.key),
            data: {
                ...productDetails
            },
            method: "PUT"
        }).then((response: AxiosResponse<ICustomResponse<IProduct>>) => {
            resolve(response?.data)
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function deleteProduct(_id: string): Promise<ICustomResponse<IProduct>> {
    return new Promise<ICustomResponse<IProduct>> (function( resolve, reject) {
        axios({
            headers: { Authorization: localStorage?.getItem("authToken") },
            url: BASE_URL + apiEnviornment.deleteProduct.replace(":id", _id),
            method: "DELETE"
        }).then((response: AxiosResponse<ICustomResponse<IProduct>>) => {
            resolve(response?.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}