import { ICustomAction } from "../../models/ICustomAction";
import { USER_DETAILS } from "./UserDetailsActionTypes";
import { IUserDetailState, defaultUserState } from "./UserState";

export default function UserDetailsReducer(state: IUserDetailState = defaultUserState, action: ICustomAction<any>): IUserDetailState{
    switch (action.type) {
        case USER_DETAILS:
            return {
                ...state,
                _id: action?.data._id,
                email: action?.data.email,
                name: action?.data.name,
                password: action?.data.name,
                contact: action?.data.contact,
                role: action?.data.role
            }
        default:
            return state;
    }
}