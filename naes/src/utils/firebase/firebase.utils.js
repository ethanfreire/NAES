import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

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
export const createUserDocumentFromAuth = async (userAuth) => {
  
  const userDocsRef = doc(db, "users", userAuth.uid);

  
  console.log(userDocsRef);

  const userSnapshot = await getDoc(userDocsRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

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
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  return userDocsRef;
};
