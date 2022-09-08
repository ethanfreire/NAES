import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const queryCollection = query(collectionRef);
  
  const querySnapshot = await getDocs(queryCollection);

return querySnapshot.docs.map((docSnapshot) => {
  return(docSnapshot.data())
}); 
  
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo={}
) => {
  
  if (!userAuth) return;
  const userDocsRef = doc(db, "users", userAuth.uid);

  console.log(userDocsRef);

  const userSnapshot = await getDoc(userDocsRef);
  console.log(userSnapshot);
  console.log("checking if user Already exist in db: " + userSnapshot.exists());
  //if user does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      //create new user
      
      await setDoc(userDocsRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
 
  return userDocsRef;
};

export const updateCurrentUserDisplayName = ( newDisplayName) => {
  console.log("your in update display call");

  return updateProfile(auth.currentUser, {displayName: newDisplayName});
  
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
