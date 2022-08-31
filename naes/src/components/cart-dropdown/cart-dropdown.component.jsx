import { CartDropdownContainer,EmptyMessage, CartItems } from "./cart-dropdown.styles.jsx";
import Button, {buttonVarietyClasses} from "../../components/button/button.component.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };


  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))) : (
            <EmptyMessage> Your cart is currently empty.</EmptyMessage>
          )
        }
      </CartItems>
      <Button buttonVariety={buttonVarietyClasses.base} onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
