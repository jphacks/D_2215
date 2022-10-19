// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn5rrntS-BmpEHb3X7pNOCmwY8PbFFPV8",
  authDomain: "wadaihorider.firebaseapp.com",
  projectId: "wadaihorider",
  storageBucket: "wadaihorider.appspot.com",
  messagingSenderId: "279486709864",
  appId: "1:279486709864:web:efa6dda5e11b8607177bdd",
  measurementId: "G-L6R9WSLR4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;