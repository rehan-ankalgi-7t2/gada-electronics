import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "Paypal" };

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItemToCart: (state, action) => {
      const { ...item } = action.payload;
      console.log(item);

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state, item);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload.shippingAddress;
      return updateCart(state);
    },
  },
});

export const { addItemToCart, removeItemFromCart, saveShippingAddress } =
  cartSlice.actions;
export default cartSlice.reducer;
