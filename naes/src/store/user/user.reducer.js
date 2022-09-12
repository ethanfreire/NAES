import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userName: null,
  isLoading:false,
  error:null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
      case USER_ACTION_TYPES.SIGN_IN_FAILED:
        return{
          ...state,
          error: payload
        };

      case USER_ACTION_TYPES.UPDATE_USERNAME:
      return {
        ...state,
        userName: payload,
      };
    default:
      return state;
  }
};
