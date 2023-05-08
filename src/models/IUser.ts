export interface IUser{
    _id: string;
    email: string;
    name: string;
    contact?: number;
    password: string;
    role: number
}

export const defaultUserValue: IUser = {
    _id: '',
    email: '',
    name: '',
    password: '',
    role: 0,
    contact: undefined
}