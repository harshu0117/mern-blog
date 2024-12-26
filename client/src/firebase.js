// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6badf.firebaseapp.com",
  projectId: "mern-blog-6badf",
  storageBucket: "mern-blog-6badf.firebasestorage.app",
  messagingSenderId: "88930128166",
  appId: "1:88930128166:web:56535a4c4e77cf827ef1e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

