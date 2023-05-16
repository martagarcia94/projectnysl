import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "nysl-545dd.firebaseapp.com",
  databaseURL: "https://nysl-545dd.firebaseio.com",
  projectId: "nysl-545dd",
  storageBucket: "nysl-545dd.appspot.com",
  appId: "nysl-545dd",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getDatabase(app);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export const signOut = () => {
  return auth.signOut();
};