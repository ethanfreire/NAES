import {
  CheckoutContainer,
  ColumnHeaders,
  ColumnTitle,
  CartTotal,
} from "./checkout.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

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
