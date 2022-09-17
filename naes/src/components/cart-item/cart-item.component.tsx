import { CartItemContainer, ItemDetails } from "./cart-item.styles";
import { CartItem as TypeCartItem } from "../../store/cart/cart.types";
import * as React from "react";

type CartItemsProps = {
  cartItem: TypeCartItem;
};

const CartItem: React.FC<CartItemsProps> = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`}></img>
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
