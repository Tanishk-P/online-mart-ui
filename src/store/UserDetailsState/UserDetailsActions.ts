import { Dispatch } from 'redux';
import { ICustomAction } from '../../models/ICustomAction';
import { IUser } from '../../models/IUser';
import { getUserDetails } from '../../services/ApiActions';
import { ICustomResponse } from '../../models/ICustomResponse';
import { USER_DETAILS } from './UserDetailsActionTypes';
import { SET_ERROR } from '../Types';

export function UserDetails() {
    return (dispatch: Dispatch<ICustomAction<IUser[]>>) => {
        getUserDetails().then((response: ICustomResponse<IUser[]>) => {
            dispatch({
                type: USER_DETAILS,
                data: response.data
            })
        }).catch(error => {
            dispatch({
                type: SET_ERROR,
                data: error?.response?.data?.data || 'Unable to get the user details'
            })
        })
    }
}