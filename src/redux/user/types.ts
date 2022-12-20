import { User } from "../../models/user";

export interface UserState {
    content : User | null
    selected: User | null
    loading : boolean;
    error : string | null;
}

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const SET_USER = 'SET_USER';

interface getUserAction {
    type: typeof GET_USER;
}

interface getUserActionSuccess {
    type: typeof GET_USER_SUCCESS;
    payload : User,
}

interface getUserActionError {
    type: typeof GET_USER_ERROR;
    payload : string
}

interface setUserAction {
    type: typeof SET_USER;
    payload : User
}

export type UserActionTypes = getUserAction | getUserActionSuccess | getUserActionError | setUserAction;
