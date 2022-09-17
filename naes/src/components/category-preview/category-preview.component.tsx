import {CategoryPreviewContainer,Title,Preview} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
import {CategoryItem} from "../../store/categories/category.types";
import * as React from "react";


type CategoryPreviewProps = {
  title: string;
  products: Array<CategoryItem>;
};

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, products }) => {
 
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return (
              <ProductCard key={product.id} product={product}></ProductCard>
            );
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
