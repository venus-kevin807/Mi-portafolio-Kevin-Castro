// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa0lEgIs6wbdaRDOTOOW8Q2F32NQ0IKQs",
  authDomain: "mi-portafolio-ea24c.firebaseapp.com",
  projectId: "mi-portafolio-ea24c",
  storageBucket: "mi-portafolio-ea24c.appspot.com",
  messagingSenderId: "986830654350",
  appId: "1:986830654350:web:ced2f0e5ba8fa1169a72df",
  measurementId: "G-CKS2KC2P09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);