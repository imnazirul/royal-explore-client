// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC57u5lSI8VKIF34Tc6s6Nihm5a5Gr4dS8",
  authDomain: "tourism-a10.firebaseapp.com",
  projectId: "tourism-a10",
  storageBucket: "tourism-a10.appspot.com",
  messagingSenderId: "700298475718",
  appId: "1:700298475718:web:9a0121bb7c7d7de375ffc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
