
import user from './slice/user'
import toolsSlice from './slice/tool'
import stepSlice from './slice/step'
import activeCardOrAccount from './slice/activeAccountAndCard'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from './api/auth';
import { allApi } from './api/allApi';


export type RootState = ReturnType<typeof store.getState>



const reducer = combineReducers({
    user,
    toolsSlice,
    stepSlice,
    activeCardOrAccount,
    // [getAllAData.reducerPath]: getAllAData.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [allApi.reducerPath]: allApi.reducer,
});



export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
        .concat(authApi.middleware)
        .concat(allApi.middleware)
        // .concat(authApi.middleware),
    // devTools: process.env.NODE_ENV !== 'production',
    // enhancers: [batchedSubscribe(debounceNotify)],
})

setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

