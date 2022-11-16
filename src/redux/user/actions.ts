import { GET_USER, GET_USER_SUCCESS , GET_USER_ERROR  } from "./types";
import { Dispatch } from "redux";
import {User}  from "../../models/user";
import UserService from "../../services/user.service";

export function getUser(token: string){

    return async (dispatch : Dispatch) => {
        dispatch({type : GET_USER})
        try {
            const user = await UserService.getUserWithToken(token)
            console.log(user)
            dispatch ({ type : GET_USER_SUCCESS , payload : new User(user.body)})
        } catch (error) {
            dispatch ({type : GET_USER_ERROR , payload : "Can't retrieve user"} )
        }
    }
}
