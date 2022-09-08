import {CategoryContainer,CategoryTitle} from "./category.styles";
import { useParams } from "react-router-dom";
import {  useState, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();
  console.log("render/rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log("useEffect fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
