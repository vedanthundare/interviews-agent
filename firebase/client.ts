// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr6Iy8A0ez8ss7Mrz1YVcgcXXAdAfSHJw",
  authDomain: "prepwise-25d2f.firebaseapp.com",
  projectId: "prepwise-25d2f",
  storageBucket: "prepwise-25d2f.firebasestorage.app",
  messagingSenderId: "380791893202",
  appId: "1:380791893202:web:ff0147726ae77dbfea110b",
  measurementId: "G-G7WBBHCXV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);