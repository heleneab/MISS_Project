// This file is almost identical to the configuration given in the Firebase console when you create the app.
// Analytics have been disabled by commenting out the relevant lines.

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, getDocs, setDoc, deleteDoc, doc, updateDoc, query, where, select} from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// New
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZZOnbd0ZFfoDNQSZNxgs6Y3wXfp0ADGQ",
  authDomain: "miss-6ce48.firebaseapp.com",
  projectId: "miss-6ce48",
  storageBucket: "miss-6ce48.appspot.com",
  messagingSenderId: "1014794651041",
  appId: "1:1014794651041:web:c122171e70dd46e27c77e0",
  measurementId: "G-9CMFCQHK05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// New
const auth = getAuth(app);

const db = getFirestore(app);

// New. Allows other modules to import the auth object
export { auth }
export {db, app,getFirestore, collection, addDoc, getDoc, setDoc, getDocs, deleteDoc, doc, updateDoc, query, where, select };