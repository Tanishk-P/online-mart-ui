import { IUser } from "../../models/IUser"

export interface IUserDetailState {
    _id: string;
    email: string;
    name: string;
    contact?: number;
    password: string;
    role: number
}

export const defaultUserState: IUserDetailState = {
    _id: '',
    email: '',
    name: '',
    contact: undefined,
    password: '',
    role: 0
}