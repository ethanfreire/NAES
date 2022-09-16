import { CategoryItem } from "../categories/category.types";
import {
  CART_ACTIONS_TYPE,
  CartItem,
  SetCartItems,
  SetIsCartOpen,
} from "./cart.types";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";

export const setCartItems = withMatcher(
  (cartItems: Array<CartItem>): SetCartItems => {
    return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, cartItems);
  }
);

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
  return createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, boolean);
});

const addCartItem = (
  cartItems: Array<CartItem>,
  productToAdd: CategoryItem
): Array<CartItem> => {
  const { id } = productToAdd;
  const existingCartItem = cartItems.find((item) => item.id === id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const addItemToCart = (
  cartItems: Array<CartItem>,
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

const removeCartItem = (
  cartItems: Array<CartItem>,
  cartItemToRemove: CartItem
): Array<CartItem> => {
  const { id } = cartItemToRemove;
  const existingCartItem = cartItems.find((item) => item.id === id);

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== id);
  }
  return cartItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

export const removeItemFromCart = (
  cartItems: Array<CartItem>,
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

const clearCartItem = (
  cartItems: Array<CartItem>,
  cartItemToClear: CartItem
): Array<CartItem> => {
  const { id } = cartItemToClear;
  return cartItems.filter((item) => item.id !== id);
};

export const clearItemFromCart = (
  cartItems: Array<CartItem>,
  cartItemToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
