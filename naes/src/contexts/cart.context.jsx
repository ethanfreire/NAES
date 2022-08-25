import { createContext, useState, useEffect } from "react";

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
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemsToCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems, productsToAdd));
  };

  const removeItemsFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const newCartQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartQuantity(newCartQuantity);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

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
