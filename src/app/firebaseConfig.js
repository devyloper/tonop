// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1nH-Sg2KfQjSu4h2j8OfrtDMG1flPFRE",
  authDomain: "tonop-35de6.firebaseapp.com",
  databaseURL: "https://tonop-35de6-default-rtdb.firebaseio.com",
  projectId: "tonop-35de6",
  storageBucket: "tonop-35de6.appspot.com",
  messagingSenderId: "698466445598",
  appId: "1:698466445598:web:0d0a9caf58a80d448a410f",
  measurementId: "G-WJFVYN0NRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {database}