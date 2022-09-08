import { CartDropdownContainer,EmptyMessage, CartItems } from "./cart-dropdown.styles.jsx";
import Button, {buttonVarietyClasses} from "../../components/button/button.component.jsx";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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
