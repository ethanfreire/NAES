import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  BaseSpan,
  Arrow,
  Value,
  Quantity,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { clearItemFromCart, addItemsToCart, removeItemsFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemHandler = () => {
    addItemsToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemsFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}></img>
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
