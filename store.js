import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import localReducer from './src/features/localSlice'
import blogApi from "./src/features/blogApi";
import userApi from "./src/features/userApi";
import profileApi from "./src/features/profileApi";
import chatApi from "./src/features/chatApi";

const store = configureStore({
    reducer: {
        local: localReducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(blogApi.middleware).concat(userApi.middleware).concat(profileApi
            .middleware).concat(chatApi
                .middleware)
    )
})

setupListeners(store.dispatch);

export default store