import {
  DirectoryItemBody,
  DirectoryItemContainer,
  BackgroundImage,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { DirectoryCategories } from "../directory/directory.component";

type DirectoryItemProps ={
  category: DirectoryCategories;
};

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title,route } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick= {navigateHandler}>
      <BackgroundImage imageUrl={imageUrl}> </BackgroundImage>
      <DirectoryItemBody>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
