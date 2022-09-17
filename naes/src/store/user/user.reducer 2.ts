import { AnyAction } from "redux";
import {
  signInSuccess,
  signOutFailed,
  signInFailed,
  signUpFailed,
  signUpStart,
  updateUserName,
  googleSignInStart,
  emailSignInStart,
  signOutSuccess,
} from "./user.action";
import { UserState } from "./user.types";

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  userName: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (
    emailSignInStart.match(action) ||
    signUpStart.match(action) ||
    googleSignInStart.match(action)
  ) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      isLoading: false,
    };
  }

  if (updateUserName.match(action)) {
    return {
      ...state,
      userName: action.payload,
    };
  }

  return state;
};
