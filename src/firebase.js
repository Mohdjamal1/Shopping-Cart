// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXriEXDQGh-hdtG1SLRj36arwOsVIjE1I",
  authDomain: "e-com-ea707.firebaseapp.com",
  projectId: "e-com-ea707",
  storageBucket: "e-com-ea707.appspot.com",
  messagingSenderId: "280434607090",
  appId: "1:280434607090:web:da24e89f5d53d1ef38216b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
