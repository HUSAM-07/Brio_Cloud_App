import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGOuQti9uYQhNQtCV-zthI6MIc-l9HcMw",
  authDomain: "cloud-price.firebaseapp.com",
  projectId: "cloud-price",
  storageBucket: "cloud-price.appspot.com",
  messagingSenderId: "548672441277",
  appId: "1:548672441277:web:63459efd94f40fa8b7e0d4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);