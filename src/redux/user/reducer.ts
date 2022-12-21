import {GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, RESET_USER, SET_USER, UserActionTypes, UserState} from "./types";


const initialState:  UserState = {
    content : null,
    error : '',
    loading : false
};

export function UserReducer(
    state = initialState,
    action: UserActionTypes
): UserState {
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

        case SET_USER: {
            return {
                ...state,
                content: action.payload
            };
        }

        case RESET_USER: {
            state = initialState
            return state
        }

        default:
            return state;
    }
}
