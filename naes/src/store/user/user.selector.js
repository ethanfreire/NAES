export const selectCurrentUser = (state) => {
    return state.user.currentUser;
  };


export const selectUserName = (state) => {
    return state.user.userName;
  };

  export const selectIsLoading = (state) => {
    return state.user.isLoading;
  };
