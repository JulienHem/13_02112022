import {
    GET_ACCOUNTS,
    GET_ACCOUNTS_ERROR,
    GET_ACCOUNTS_SUCCESS,
    SET_ACCOUNT_TRANSACTION,
    SET_ACCOUNTS,
    TransactionActionTypes,
    TransactionState,
} from "./types";


const initialState: TransactionState = {
    list : null,
    selectedAccounts: null,
    selectedTransaction: null,
    error : '',
    loading : false
};

export function AccountReducer(
    state = initialState,
    action: TransactionActionTypes
): TransactionState {
    switch(action.type) {
        case GET_ACCOUNTS: {
            return {
                ...state,
                loading : true,
                error : null
            };
        }

        case GET_ACCOUNTS_SUCCESS: {
            return {
                ...state,
                loading : false,
                list : action.payload
            };
        }

        case GET_ACCOUNTS_ERROR: {
            return {
                ...state,
                loading : false,
                error : action.payload
            };
        }

        case SET_ACCOUNTS: {
            return {
                ...state,
                loading: false,
                selectedAccounts: action.payload
            }
        }
        case SET_ACCOUNT_TRANSACTION: {
            return {
                ...state,
                loading: false,
                selectedTransaction: action.payload
            }
        }

        default:
            return state;
    }
}
