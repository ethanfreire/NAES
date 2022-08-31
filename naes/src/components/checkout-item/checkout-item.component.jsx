import {CheckoutItemContainer, ImageContainer, Name,Quantity,Quantity2,Arrow,Value,Price,RemoveButton,Img} from "./checkout-item.styles.jsx";
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
        <Img src={imageUrl} alt={`${name}`}></Img>
      </ImageContainer>
      <Name> {name}</Name>
      <Quantity></Quantity>
      <Quantity2>
           <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value> 
          {quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
        </Quantity2>
       
        <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
