import { GET_TRANSACTION, GET_TRANSACTION_SUCCESS , GET_TRANSACTION_ERROR  } from "./types";
import { Dispatch } from "redux";
import UserService from "../../services/user.service";
import {User} from "../../models/user";
import {SET_USER} from "../user/types";
import Transaction from "../../models/transaction";
import TransactionService from "../../services/transaction.service";

export function getTransaction(){

    return async (dispatch : Dispatch) => {
        dispatch({type : GET_TRANSACTION})
        try {
            const transactions = await TransactionService.getTransactions()
            return dispatch ({ type : GET_TRANSACTION_SUCCESS , payload : transactions})
        } catch (error) {
            return dispatch ({type : GET_TRANSACTION_ERROR , payload : "Can't retrieve user"} )
        }
    }
}

export function setTransaction(transaction: Transaction) {
    return {
        type: SET_USER,
        payload: transaction
    }
}

