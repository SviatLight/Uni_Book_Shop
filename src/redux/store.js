import { configureStore } from '@reduxjs/toolkit';
import { booksAPI } from './booksAPI';
import paramsSlice from './slices/paramsSlice';

export const store = configureStore({
  reducer: {
    [booksAPI.reducerPath]: booksAPI.reducer,
    paramsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksAPI.middleware),
});
