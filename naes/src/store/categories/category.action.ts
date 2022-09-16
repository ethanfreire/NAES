import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";

import {
  CATEGORIES_ACTION_TYPES,
  Category,
  FetchCategoriesFailed,
  FetchCategoriesStart,
  FetchCategoriesSuccess,
} from "./category.types";

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
  return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Array<Category>): FetchCategoriesSuccess => {
    return createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    );
  }
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
  }
);
