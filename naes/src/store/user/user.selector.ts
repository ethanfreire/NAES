import { createSelector } from "reselect";
import { UserState } from "./user.types";
import { RootState } from "../store";
const selectUserReducer = (state:RootState): UserState => {
  return state.user;
};

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => {
    return userSlice.currentUser;
  }
);

export const selectUserName = createSelector(
  [selectUserReducer],
  (userSlice) => {
    return userSlice.userName;
  }
);

export const selectIsLoading = createSelector(
  [selectUserReducer],
  (userSlice) => {
    return userSlice.isLoading;
  }
);
