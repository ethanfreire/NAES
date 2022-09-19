import { initializeApp } from "firebase/app";
import { ObjectsToAdd, AdditionalInfo, UserData } from "./firebase.types";
import { Category } from "../../store/categories/category.types";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User,
  NextOrObserver,
} from "firebase/auth";

import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
  getDocs,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdCrRB1d2F-UEpaEtOqS7x_-aIM4JPCIY",
  authDomain: "naes-db.firebaseapp.com",
  projectId: "naes-db",
  storageBucket: "naes-db.appspot.com",
  messagingSenderId: "550635265151",
  appId: "1:550635265151:web:a7f79d6aca389fcbf0f34a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async <T extends ObjectsToAdd>(
  collectionKey: string,
  objectsToAdd: Array<T>
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Array<Category>> => {
  const collectionRef = collection(db, "categories");
  const queryCollection = query(collectionRef);

  const querySnapshot = await getDocs(queryCollection);

  return querySnapshot.docs.map((docSnapshot) => {
    return docSnapshot.data() as Category;
  });
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocsRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocsRef);

  //if user does not exist in DB
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //create new user in DB
    await setDoc(userDocsRef, {
      displayName,
      email,
      createdAt,
      ...additionalInfo,
    });
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const updateCurrentUserDisplayName = (
  user: User,
  newDisplayName: string
) => {
  return updateProfile(user, { displayName: newDisplayName });
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
