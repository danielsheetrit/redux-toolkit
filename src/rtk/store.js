// @ts-nocheck
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

import contactsReducer from 'slices/contactsSlice';
import { apiSlice } from 'api/apiSlice';

export const store = configureStore({
  reducer: {
    contactsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
