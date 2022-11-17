import { configureStore } from '@reduxjs/toolkit';
import { authSlice, jobsSlice } from './';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        job: jobsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})