import axios, { AxiosResponse } from "axios"
import { ICustomResponse } from "../models/ICustomResponse"
import { ILoginResult } from "../models/ILoginResult"
import { BASE_URL, apiEnviornment } from "./ApiEnivornment"
import { IUser } from "../models/IUser"
import { IIntegration } from "../models/IIntegration"
import { IProduct } from "../models/IProduct"
import { IOrders } from "../models/IOrders"

export function login(email: string, password: string) : Promise<ICustomResponse<ILoginResult>> {
    return new Promise<ICustomResponse<ILoginResult>>( function( resolve, reject){
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

export function register(email: string, name: string, contact: number, password: string ) : Promise<ICustomResponse<IIntegration>> {
    return new Promise<ICustomResponse<IIntegration>>( function ( resolve, reject) {
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

export function getUserDetails() : Promise<ICustomResponse<IUser>> {
    return new Promise<ICustomResponse<IUser>> (function ( resolve, reject) {
        axios({
            headers: {
                Authorization: localStorage.getItem('authToken')
            },
            url: BASE_URL + apiEnviornment.getUserDetails,
            method: 'GET'
        }).then((response: AxiosResponse<ICustomResponse<IUser>>) => {
            resolve(response.data);
        }).catch((error: Error) =>{
            reject(error);
        })
    })
}

export function getAllProducts() : Promise<ICustomResponse<IProduct[]>> {
    return new Promise<ICustomResponse<IProduct[]>> ( function( resolve, reject) {
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

export function getProductById(_id: string) : Promise<ICustomResponse<IProduct[]>> {
    return new Promise <ICustomResponse<IProduct[]>> (function (resolve, reject) {
        getAllProducts().then(response => {
            
        })
    })
}

export function orderProduct(productId: string, quantity: number, totalAmount: number, productName: string) : Promise<ICustomResponse<IOrders>> {
    return new Promise<ICustomResponse<IOrders>> (function ( resolve, reject) {
        axios({
            headers: {Authorization: localStorage.getItem("authToken")},
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