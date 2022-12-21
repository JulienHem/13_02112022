import AccountTransaction from "../../models/accountTransaction";
import Account from "../../models/account";

export interface TransactionState {
    list : Account[] | null;
    selectedAccounts: Account[] | null;
    selectedTransaction: AccountTransaction | null;
    loading : boolean;
    error : string | null;
}

export const GET_ACCOUNTS = 'GET_ACCOUNTS';
export const GET_ACCOUNTS_SUCCESS = 'GET_ACCOUNTS_SUCCESS';
export const GET_ACCOUNTS_ERROR = 'GET_ACCOUNTS_ERROR';
export const SET_ACCOUNTS = 'SET_ACCOUNTS'
export const SET_ACCOUNT_TRANSACTION = 'SET_ACCOUNT_TRANSACTION';

interface geTransactionAction {
    type: typeof GET_ACCOUNTS;
}

interface geTransactionActionSuccess {
    type: typeof GET_ACCOUNTS_SUCCESS;
    payload : Account[],
}

interface geTransactionActionError {
    type: typeof GET_ACCOUNTS_ERROR;
    payload : string
}

interface setAccounts {
    type: typeof SET_ACCOUNTS
    payload: Account[]
}

interface setTransaction {
    type: typeof SET_ACCOUNT_TRANSACTION;
    payload : AccountTransaction
}

export type TransactionActionTypes =
    geTransactionAction
    | geTransactionActionSuccess
    | geTransactionActionError
    | setAccounts
    | setTransaction
