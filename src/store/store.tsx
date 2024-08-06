// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/CartSlice';
import searchReducer from '../reducers/SearchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
