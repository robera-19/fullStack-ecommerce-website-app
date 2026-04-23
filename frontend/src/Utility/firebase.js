// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9NP_CWLWjUpu-3KcnnS1YuQiK4PZLcVg",
  authDomain: "clone-27e3b.firebaseapp.com",
  projectId: "clone-27e3b",
  storageBucket: "clone-27e3b.firebasestorage.app",
  messagingSenderId: "597823912942",
  appId: "1:597823912942:web:b6a4235467e0f2dfba2cff",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
