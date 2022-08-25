import "../checkout/checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="column-headers">
        <div className="column-title">
          <span>Product</span>
        </div>
        <div className="column-title">
          <span>Description</span>
        </div>
        <div className="column-title">
          <span>Quantity</span>
        </div>
        <div className="column-title">
          <span>Price</span>
        </div>
        <div className="column-title">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
        );
      })}
      <span className="cart-total">Total: ${cartTotal}</span>
    </div>
  );
};
export default Checkout;
