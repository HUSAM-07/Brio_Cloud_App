// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGOuQti9uYQhNQtCV-zthI6MIc-l9HcMw",
  authDomain: "cloud-price.firebaseapp.com",
  projectId: "cloud-price",
  storageBucket: "cloud-price.appspot.com",
  messagingSenderId: "548672441277",
  appId: "1:548672441277:web:63459efd94f40fa8b7e0d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);