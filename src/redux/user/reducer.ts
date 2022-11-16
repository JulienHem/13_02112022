import {  GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, UserActionTypes, UserState } from "./types";
import {User} from "../../models/user";


const initialState:  UserState = {
    content : undefined,
    error : '',
    loading : false
};

export function UserReducer(
    state = initialState,
    action: UserActionTypes
): UserState{
    switch(action.type) {
        case GET_USER: {
            return {
                ...state,
                loading : true,
                error : null
            };
        }

        case GET_USER_SUCCESS: {
            return {
                ...state,
                loading : false,
                content : action.payload
            };
        }

        case GET_USER_ERROR: {
            return {
                ...state,
                loading : false,
                error : action.payload
            };
        }

        default:
            return state;
    }
}
