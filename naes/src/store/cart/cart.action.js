import { CART_ACTIONS_TYPE } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


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



export const setCartItems = (cartItemsArray) => {
    return(createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, cartItemsArray))
};

export const setIsCartOpen = (boolean) => {
    return( createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, boolean))
};


export const addItemToCart = (cartItems, productsToAdd) => {
    const newCartItems = addCartItem(cartItems, productsToAdd);
    return(createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS,newCartItems));
  };

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return(createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS,newCartItems));
  };

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return(createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS,newCartItems));
  };