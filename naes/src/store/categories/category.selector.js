import { createSelector } from "reselect";

//initial selector function
const selectCategoryReducer = (state) => {
  return state.categories;
};

//memoized input selector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesReducer) => {
   
    return categoriesReducer.categories;
  }
);

//memoized output selector
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categoriesArray) => {
    return categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesReducer) => {
    return(categoriesReducer.isLoading)
  }
);
