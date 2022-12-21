import {
    SET_ACCOUNT_TRANSACTION,
    GET_ACCOUNTS,
    GET_ACCOUNTS_SUCCESS,
    GET_ACCOUNTS_ERROR, SET_ACCOUNTS
} from "./types";
import { Dispatch } from "redux";
import AccountTransaction from "../../models/accountTransaction";
import AccountService from "../../services/account.service";
import Account from "../../models/account";

export function getAccounts(){

    return async (dispatch : Dispatch) => {
        dispatch({type : GET_ACCOUNTS})
        try {
            const transactions =  AccountService.getAccountTransactions();
            console.log({transactions})
            return dispatch ({ type : GET_ACCOUNTS_SUCCESS , payload : transactions})
        } catch (error) {
            return dispatch ({type : GET_ACCOUNTS_ERROR, payload : "Can't retrieve user"} )
        }
    }
}

export function setAccounts(accounts: Account[]) {
    return {
        type: SET_ACCOUNTS,
        payload: accounts
    }
}

export function setAccountTransaction(accountTransaction: AccountTransaction) {
    console.log({accountTransaction})
    return {
        type: SET_ACCOUNT_TRANSACTION,
        payload: accountTransaction
    }
}

