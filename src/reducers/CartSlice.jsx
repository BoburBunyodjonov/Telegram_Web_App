import { createSlice } from "@reduxjs/toolkit";

// Load and save cart from/to local storage
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
      if (existingItem) {
        // If the item already exists, do nothing or handle updating quantity
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state);
    },
    increaseQuantity(state, action) {
      const item = state.find(item => item.product_id === action.payload);
      if (item) {
        item.quantity += 1;
        saveCartToLocalStorage(state);
      }
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.findIndex(item => item.product_id === action.payload);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
        saveCartToLocalStorage(state);
      }
    },
    clearCart(state) {
      state.length = 0; 
      localStorage.removeItem('cart'); 
    }
  }
});

export const { add, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
