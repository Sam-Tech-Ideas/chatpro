// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQV66rkR7b4df0HJmS_LpoeAxTDULq2kQ",
  authDomain: "chatfire-6dc19.firebaseapp.com",
  projectId: "chatfire-6dc19",
  storageBucket: "chatfire-6dc19.appspot.com",
  messagingSenderId: "80273418596",
  appId: "1:80273418596:web:673b16eb1ddff2d320f271",
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db  = getFirestore(app)
