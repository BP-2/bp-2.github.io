// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUy_xrYmDVzUBUqg8juoTQQmrnNyOGbMs",
  authDomain: "coach-connect-562cc.firebaseapp.com",
  projectId: "coach-connect-562cc",
  storageBucket: "coach-connect-562cc.appspot.com",
  messagingSenderId: "285822527748",
  appId: "1:285822527748:web:6cf3edb42cdea940c9c851",
  measurementId: "G-6PHB2M7C2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)


/*
FIREBASE_API_KEY = "AIzaSyBUy_xrYmDVzUBUqg8juoTQQmrnNyOGbMs"
AUTH_DOMAIN = "coach-connect-562cc.firebaseapp.com"
PROJECT_ID = "coach-connect-562cc"
STORAGE_BUCKET = "coach-connect-562cc.appspot.com"
MESSAGE_SENDER_ID = "285822527748"
APP_ID = "1:285822527748:web:6cf3edb42cdea940c9c851"
MEASUREMENT_ID = "G-6PHB2M7C2Y"

apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGE_SENDER_ID,
  appId: import.meta.env.APP_ID,
  measurementId: import.meta.env.MEASUREMENT_ID

*/