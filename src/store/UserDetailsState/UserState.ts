import { IUser } from "../../models/IUser"

export interface IUserDetailState {
    userDetails: IUser[]
}

export const defaultUserState: IUserDetailState = {
    userDetails: []
}