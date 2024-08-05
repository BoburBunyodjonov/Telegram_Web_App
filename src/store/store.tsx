// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/CartSlice';
import modalReducer from '../reducers/ModalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
