import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvPn-QWmnSSksRZQt5N8SBndKE6hpsJRk",
  authDomain: "openshop-3210e.firebaseapp.com",
  projectId: "openshop-3210e",
  storageBucket: "openshop-3210e.appspot.com",
  messagingSenderId: "905042212200",
  appId: "1:905042212200:web:eaacc53640428d8ec7d2dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);