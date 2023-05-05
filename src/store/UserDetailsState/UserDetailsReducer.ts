import { ICustomAction } from "../../models/ICustomAction";
import { USER_DETAILS } from "./UserDetailsActionTypes";
import { IUserDetailState, defaultUserState } from "./UserState";

export default function UserDetailsReducer(state: IUserDetailState = defaultUserState, action: ICustomAction<any>): IUserDetailState{
    switch (action.type) {
        case USER_DETAILS:
            return {
                ...state,
                userDetails: action.data
            }
        default:
            return state;
    }
}