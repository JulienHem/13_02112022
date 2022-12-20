import Transaction from "../../models/transaction";

export interface TransactionState {
    content : Transaction | null;
    selected: Transaction | null;
    loading : boolean;
    error : string | null;
}

export const GET_TRANSACTION = 'GET_TRANSACTION';
export const GET_TRANSACTION_SUCCESS = 'GET_TRANSACTION_SUCCESS';
export const GET_TRANSACTION_ERROR = 'GET_TRANSACTION_ERROR';
export const SET_TRANSACTION = 'SET_TRANSACTION';

interface geTransactionAction {
    type: typeof GET_TRANSACTION;
}

interface geTransactionActionSuccess {
    type: typeof GET_TRANSACTION_SUCCESS;
    payload : Transaction,
}

interface geTransactionActionError {
    type: typeof GET_TRANSACTION_ERROR;
    payload : string
}

interface setTransaction {
    type: typeof SET_TRANSACTION;
    payload : Transaction
}

export type TransactionActionTypes =
    geTransactionAction
    | geTransactionActionSuccess
    | geTransactionActionError
    | setTransaction;
