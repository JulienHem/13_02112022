import {GET_USER, GET_USER_SUCCESS, GET_USER_ERROR, SET_USER, RESET_USER} from "./types";
import { Dispatch } from "redux";
import {User}  from "../../models/user";
import UserService from "../../services/user.service";

export function getUser(token: string){

    return async (dispatch : Dispatch) => {
        dispatch({type : GET_USER})
        try {
            const user = await UserService.getUserWithToken(token)
            return dispatch ({ type : GET_USER_SUCCESS , payload : user.body})
        } catch (error) {
            return dispatch ({type : GET_USER_ERROR , payload : "Can't retrieve user"} )
        }
    }
}

export function setUser(user: User | null) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function resetUser() {
    return {
        type: RESET_USER,
        payload: null,
    }
}
