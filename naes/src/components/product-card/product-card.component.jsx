import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.jsx";
import Button, {
  buttonVarietyChoices,
} from "../../components/button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    return dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}></img>

      <Button
        buttonVariety={buttonVarietyChoices.inverted}
        onClick={addProductToCart}
      >
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
