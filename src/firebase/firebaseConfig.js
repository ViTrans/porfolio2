// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGpqvntdoM0exC0bYaUzDhvKCKVWVKthI",
  authDomain: "portfolio-340a9.firebaseapp.com",
  projectId: "portfolio-340a9",
  storageBucket: "portfolio-340a9.appspot.com",
  messagingSenderId: "841503906586",
  appId: "1:841503906586:web:c381c9831b519a5447aaa3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);
export default storage;
