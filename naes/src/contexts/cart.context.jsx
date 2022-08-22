import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productsToAdd) => {
  const { id } = productsToAdd;
  const existingCartItem = cartItems.find((item) => item.id === id);

  if (existingCartItem) {
    //1. it does exist in cart , increase its quantity in cart.
    return cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  //2. it doesn't exist in cart yet add cartItem with quantity to 1.
  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartQuantity: 0
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity,setCartQuantity] = useState(0);

  const addItemsToCart = (productsToAdd) => {
    setCartItems(addCartItem(cartItems, productsToAdd));
  };

  useEffect( () => {
    const newCartQuantity = cartItems.reduce( (total, cartItem) => total + cartItem.quantity ,0); 
    setCartQuantity(newCartQuantity);

  }, [cartItems]);
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart,cartQuantity };

  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
