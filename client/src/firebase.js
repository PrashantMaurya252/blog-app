// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-222da.firebaseapp.com",
  projectId: "mern-blog-222da",
  storageBucket: "mern-blog-222da.appspot.com",
  messagingSenderId: "796963711356",
  appId: "1:796963711356:web:b4c5de4ff6e2dcc6b69cf9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);