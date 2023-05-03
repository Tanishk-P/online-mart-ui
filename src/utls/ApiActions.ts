import axios, { AxiosResponse } from "axios"
import { ICustomResponse } from "../models/ICustomResponse"
import { ILoginResult } from "../models/ILoginResult"
import { BASE_URL, apiEnviornment } from "./ApiEnivornment"
import { IUser } from "../models/IUser"

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
            resolve(response.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}

export function register(email: string, name: string, contact: number, password: string ) : Promise<ICustomResponse<IUser>> {
    return new Promise<ICustomResponse<IUser>>( function ( resolve, reject) {
        axios({
            url: BASE_URL + apiEnviornment.register,
            data: {
                email,
                name,
                contact,
                password
            },
            method: 'POST'
        }).then((response: AxiosResponse<ICustomResponse<IUser>>) => {
            resolve(response.data);
        }).catch((error: Error) => {
            reject(error);
        })
    })
}