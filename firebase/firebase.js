// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt7ibigKLJR5PlavjyUCKGm-3REhkA6a8",
  authDomain: "test-micro-posts.firebaseapp.com",
  projectId: "test-micro-posts",
  storageBucket: "test-micro-posts.appspot.com",
  messagingSenderId: "890917166156",
  appId: "1:890917166156:web:f1b5a1fc1960cf628ae8e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = {firebase};