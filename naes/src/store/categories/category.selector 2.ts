import { createSelector } from "reselect";
import { CategoryMap,CategoriesState } from "./category.types";
import { RootState } from "../store";

const selectCategoryReducer = (state:RootState): CategoriesState => {
  return state.categories;
};

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.isLoading;
  }
);

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesArray): CategoryMap => {
    return categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
  }
);


