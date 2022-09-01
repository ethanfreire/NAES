import {ProductCardContainer,Footer,Name,Price}from "./product-card.styles.jsx";
import Button, {buttonVarietyClasses} from "../../components/button/button.component.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemsToCart } = useContext(CartContext);
  const addProductToCart = () => addItemsToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}></img>

      <Button buttonVariety={buttonVarietyClasses.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>

      <Footer>
        <Name>{name}</Name>
        <Price> {price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
