
import {configureStore} from "@reduxjs/toolkit";
import {UserReducer} from "./user/reducer";
import {TransactionReducer} from "./transactions/reducer";

export const store = configureStore({

    reducer: {
        user: UserReducer,
        transactions: TransactionReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
