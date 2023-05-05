import axios, { AxiosResponse } from "axios"
import { ICustomResponse } from "../models/ICustomResponse"
import { ILoginResult } from "../models/ILoginResult"
import { BASE_URL, apiEnviornment } from "./ApiEnivornment"
import { IUser } from "../models/IUser"
import { IIntegration } from "../models/IIntegration"

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

export function getUserDetails() : Promise<ICustomResponse<IUser[]>> {
    return new Promise<ICustomResponse<IUser[]>> (function ( resolve, reject) {
        axios({
            headers: {
                Authorization: localStorage.getItem('authToken')
            },
            url: BASE_URL + apiEnviornment.getUserDetails,
            method: 'GET'
        }).then((response: AxiosResponse<ICustomResponse<IUser[]>>) => {
            resolve(response.data);
        }).catch((error: Error) =>{
            reject(error);
        })
    })
}