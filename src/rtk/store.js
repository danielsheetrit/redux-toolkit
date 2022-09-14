// @ts-nocheck
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import contactsReducer from 'slices/contactsSlice';
import { apiSlice } from 'api/apiSlice';

const reducer = {
  contactsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};

const logger = createLogger();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(apiSlice.middleware)
        .concat(logger),
});
