import { User } from "../../models/user";

export interface UserState {
    content : User | undefined,
    loading : boolean;
    error : string | null;
}

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

interface getUserAction {
    type: typeof GET_USER;
}

interface getUserActionSuccess {
    type: typeof GET_USER_SUCCESS;
    payload : User | undefined,
}
interface getUserActionError {
    type: typeof GET_USER_ERROR;
    payload : string
}

export type UserActionTypes = getUserAction | getUserActionSuccess | getUserActionError;
