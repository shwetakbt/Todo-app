// store.js

import { configureStore } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from './services/jsonPlaceholderApi'; // Correct path to API slice

// Configure the Redux store
const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer, // Add API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware), // Add RTK Query middleware
});

export default store;
