import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productsToAdd) => {
  const { id } = productsToAdd;
  const existingCartItem = cartItems.find((item) => item.id === id);

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const { id } = cartItemToRemove;
  const existingCartItem = cartItems.find((item) => item.id === id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== id);
  }
  return cartItems.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  const { id } = cartItemToClear;
  return cartItems.filter((item) => item.id !== id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  clearItemFromCart: () => {},
  cartQuantity: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const CART_ACTIONS_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartQuantity, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartQuantity = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartQuantity: newCartQuantity,
        cartTotal: newCartTotal,
      })
    );
  };

  const setIsCartOpen = (bool) => {
    dispatch(
      createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, bool));
  };

  const addItemsToCart = (productsToAdd) => {
    const newCartItems = addCartItem(cartItems, productsToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemsFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    removeItemsFromCart,
    clearItemFromCart,
    cartQuantity,
    cartTotal,
  };

  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
