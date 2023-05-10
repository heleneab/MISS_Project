// This file is almost identical to the configuration given in the Firebase console when you create the app.
// Analytics have been disabled by commenting out the relevant lines.

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, getDocs, setDoc, deleteDoc, doc, updateDoc, query, where, select } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// New
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz2DRsmlpg0BzFQTu-CM71niJ7BjbQ0Qk",
  authDomain: "calendertest-7ea3c.firebaseapp.com",
  projectId: "calendertest-7ea3c",
  storageBucket: "calendertest-7ea3c.appspot.com",
  messagingSenderId: "765578883948",
  appId: "1:765578883948:web:608889549442d3e50bb949",
  measurementId: "G-NH8JVJXQVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// New
const auth = getAuth(app);

const db = getFirestore(app);

// New. Allows other modules to import the auth object
//export { auth }
export {db, app,auth,getFirestore, collection, addDoc, getDoc, setDoc, getDocs, deleteDoc, doc, updateDoc, query, where, select };