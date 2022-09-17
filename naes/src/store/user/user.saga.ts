import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import {
  USER_ACTION_TYPES,
  EmailSignInStart,
  SignUpSuccess,
  SignUpStart,
} from "./user.types";
import { User, AuthError } from "firebase/auth";
import { AdditionalInfo } from "../../utils/firebase/firebase.types";
import {
  signInSuccess,
  signInFailed,
  signUpFailed,
  signUpSuccess,
  updateUserName,
  signOutSuccess,
  signOutFailed,
} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  updateCurrentUserDisplayName,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

const uiErrorAlert = (error: AuthError): void => {
  return alert("Sign In Error has occurred: " + error.message.slice(10, 50));
};

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: AdditionalInfo
) {
  console.log("get user snapshot");
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo
    );

    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }

    if (userAuth.displayName) {
      yield* put(updateUserName(userAuth.displayName));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
    uiErrorAlert(error as AuthError);
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInfo },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalInfo);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    if (!user) return;
    yield* call(getSnapshotFromUserAuth, user);
    console.log("You've successfully Google sign in");
  } catch (error) {
    yield* put(signInFailed(error as Error));
    uiErrorAlert(error as AuthError);
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
      console.log("You've successfully sign in");
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
    uiErrorAlert(error as AuthError);
  }
}

export function* startingSignUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
      yield* call(updateCurrentUserDisplayName, user, displayName);
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
    uiErrorAlert(error as AuthError);
  }
}

export function* signOutCurrentUser() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
    uiErrorAlert(error as AuthError);
  }
}

export function* isCurrentUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
    uiErrorAlert(error as AuthError);
  }
}

export function* onCheckUserSession() {
  yield* takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION,
    isCurrentUserAuthenticated
  );
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, startingSignUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutCurrentUser);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
