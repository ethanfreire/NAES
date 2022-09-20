import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import Button, { buttonVarietyChoices } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import * as React from "react";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: React.FC<React.PropsWithChildren<ProductCardProps>> = ({ product }) => {
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
