import { IUserDetailState, defaultUserState } from "./UserDetailsState/UserState";

export interface IAppState {
    userDetailState: IUserDetailState,
}

export const defaultAppState: IAppState = {
    userDetailState: defaultUserState,
}