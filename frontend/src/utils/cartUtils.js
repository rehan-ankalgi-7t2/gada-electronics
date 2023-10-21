export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate the items price in whole number (pennies) to avoid issues with
  // floating point number calculations
  const itemsPrice = state.cartItems.reduce((acc, item) => {
    // console.log(`item price ${item.price}`);
    // console.log(`item qty ${item.qty}`);
    return acc + (item.price * 100 * item.qty) / 100;
  }, 0);

  state.itemsPrice = addDecimals(itemsPrice);
  // console.log(state.itemPrice);

  /**
   * @description calculate shipping price
   * @summary if itemPrice is > 199 then the shipping is free else shipping price is 10
   */
  // Calculate the shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = addDecimals(shippingPrice);

  // Calculate the tax price
  const taxPrice = 0.15 * itemsPrice;
  state.taxPrice = addDecimals(taxPrice);

  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  // Calculate the total price
  state.totalPrice = addDecimals(totalPrice);

  // Save the cart to localStorage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
