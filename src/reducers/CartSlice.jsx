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
      }
      saveCartToLocalStorage(state);
    },
    increaseQuantity(state, action) {
      const item = state.find(item => item.product_id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCartToLocalStorage(state);
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.findIndex(item => item.product_id === action.payload);
      if (itemIndex !== -1 && state[itemIndex].quantity > 0) {
        state[itemIndex].quantity -= 1;
        if (state[itemIndex].quantity === 0) {
          localStorage.removeItem(state[itemIndex].product_id);
          state.splice(itemIndex, 1);
        }
      }
      saveCartToLocalStorage(state);
    }
    
  }
});

export const { add, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
