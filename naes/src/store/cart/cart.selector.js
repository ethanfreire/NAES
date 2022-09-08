import { createSelector } from "reselect";

const selectCartReducer = (state) => {
  return state.cart;
};

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartReducer) => {
    return cartReducer.isCartOpen;
  }
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => {
    return cartReducer.cartItems;
  }
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItemsArray) => {
    return cartItemsArray.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItemsArray) => {
    return cartItemsArray.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0);
  }
);
