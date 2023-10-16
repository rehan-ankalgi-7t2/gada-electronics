import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      console.log(item);

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems.map((x) => (x._id === existItem._id ? item : x));
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      // calculate item price
      state.itemPrice = addDecimals(
        state.cartItems.reduce(
          (acc, item) => acc + item.price * item.qty * 100,
          0
        )
      );

      /**
       * @description calculate shipping price
       * @summary if itemPrice is > 199 then the shipping is free else shipping price is 10
       */
      // calculate shipping price
      state.shippingPrice = addDecimals(state.itemPrice > 199 ? 0 : 10);

      // calculate taxxed price
      state.taxPrice = addDecimals(Number(0.15 * state.itemPrice).toFixed(2));

      // calculate total price
      state.totalPrice = (
        Number(state.itemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
