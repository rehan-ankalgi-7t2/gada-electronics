export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // calculate item price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  console.log(state.itemPrice);

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
};
