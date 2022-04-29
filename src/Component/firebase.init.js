// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbEjKoFzFyUN4Rvkdtfn9vtQ-ATqn3_zg",
  authDomain: "perfume-warehouse.firebaseapp.com",
  projectId: "perfume-warehouse",
  storageBucket: "perfume-warehouse.appspot.com",
  messagingSenderId: "466937487728",
  appId: "1:466937487728:web:cba83f2fa5f6718c106fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;