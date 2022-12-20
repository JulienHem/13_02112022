import {
    GET_TRANSACTION,
    GET_TRANSACTION_ERROR,
    GET_TRANSACTION_SUCCESS,
    SET_TRANSACTION,
    TransactionActionTypes,
    TransactionState
} from "./types";


const initialState:  TransactionState = {
    content : null,
    selected: null,
    error : '',
    loading : false
};

export function TransactionReducer(
    state = initialState,
    action: TransactionActionTypes
): TransactionState {
    switch(action.type) {
        case GET_TRANSACTION: {
            return {
                ...state,
                loading : true,
                error : null
            };
        }

        case GET_TRANSACTION_SUCCESS: {
            return {
                ...state,
                loading : false,
                content : action.payload
            };
        }

        case GET_TRANSACTION_ERROR: {
            return {
                ...state,
                loading : false,
                error : action.payload
            };
        }
        case SET_TRANSACTION: {
            return {
                ...state,
                loading: false,
                selected: action.payload
            }
        }

        default:
            return state;
    }
}
