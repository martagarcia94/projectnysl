import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "nysl-545dd.firebaseapp.com",
  databaseURL: "https://nysl-545dd-default-rtdb.firebaseio.com",
  projectId: "nysl-545dd",
  storageBucket: "nysl-545dd.appspot.com",
  messagingSenderId: "694471846673",
  appId: "1:694471846673:web:7f4a6a74e0dc81af47bab0",
  measurementId: "G-CYN8HT4XJ7"
};

export const app = firebase.initializeApp(firebaseConfig);

export const db = getDatabase(app);

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();

export const storage = getStorage(app);

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  return auth.signOut();
};

