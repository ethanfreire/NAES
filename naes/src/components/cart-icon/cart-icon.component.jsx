import "../cart-icon/cart-icon.styles.scss";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const{isCartOpen,setIsCartOpen,cartQuantity} = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-cart-icon"></ShoppingCartIcon>
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};
export default CartIcon;
