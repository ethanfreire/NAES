import {
  CheckoutContainer,
  ColumnHeaders,
  ColumnTitle,
  CartTotal,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <ColumnHeaders>
        <ColumnTitle>
          <span>Product</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Description</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Quantity</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Price</span>
        </ColumnTitle>
        <ColumnTitle>
          <span>Remove</span>
        </ColumnTitle>
      </ColumnHeaders>

      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
        );
      })}
      <CartTotal>Total: ${cartTotal}</CartTotal>
    </CheckoutContainer>
  );
};
export default Checkout;
