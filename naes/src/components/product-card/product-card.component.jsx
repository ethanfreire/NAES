import "../product-card/product-card.styles.scss";
import Button, {buttonVarietyClasses} from "../../components/button/button.component.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemsToCart } = useContext(CartContext);
  const addProductToCart = () => addItemsToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}></img>

      <Button buttonVariety={buttonVarietyClasses.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> {price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
