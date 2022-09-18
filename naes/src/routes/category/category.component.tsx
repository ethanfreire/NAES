import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";


type CategoryRoutesParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<keyof CategoryRoutesParams>() as CategoryRoutesParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => {
              return (
                <ProductCard key={product.id} product={product}></ProductCard>
              );
            })}
        </CategoryContainer>
      )}
    </Fragment>
  );
};
export default Category;
