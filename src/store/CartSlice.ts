import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [] as any[],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload; 
      const existingItem = state.cartItems.find((item: any) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const id = action.payload; 
      const existingItem = state.cartItems.find((item: any) => item.id === id);
      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter((item: any) => item.id !== id);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item: any) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.totalPrice -= existingItem.price;
        state.cartItems = state.cartItems.filter((item: any) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;