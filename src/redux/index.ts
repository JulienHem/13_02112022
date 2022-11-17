
import {configureStore} from "@reduxjs/toolkit";
import {UserReducer} from "./user/reducer";

export const store = configureStore({

    reducer: {
        user: UserReducer,
    },

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             // Ignore these action types
    //             ignoredActions: ['GET_USER_SUCCESS'],
    //             // Ignore these field paths in all actions
    //             // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    //             // Ignore these paths in the state
    //             // ignoredPaths: ['user.content'],
    //         },
    //     }),
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch