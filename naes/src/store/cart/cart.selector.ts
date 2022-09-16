import { createSelector } from "reselect";
import { CartState } from "./cart.types";
import { RootState } from "../store";

const selectCartReducer = (state:RootState):CartState => {
  return state.cart;
};

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.isCartOpen;
  }
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    return cartSlice.cartItems;
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
