


import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState = loadCartFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.find(item => item.product_id === action.payload.product_id);
      if (!existingItem) {
        state.push({ ...action.payload, quantity: 1 });
        saveCartToLocalStorage(state);
      }
    },
    increaseQuantity(state, action) {
      const item = state.find(item => item.product_id === action.payload);
      if (item) {
        item.quantity += 1;
        saveCartToLocalStorage(state);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find(item => item.product_id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToLocalStorage(state);
      }
    },
    remove(state, action) {
      const newState = state.filter(item => item.product_id !== action.payload);
      saveCartToLocalStorage(newState);
      return newState;
    },
    // other reducers...
  }
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

