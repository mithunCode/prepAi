// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEgVc-y6uLsT-TT6laprib1TCUM3x5SzI",
  authDomain: "prepwise-27b95.firebaseapp.com",
  projectId: "prepwise-27b95",
  storageBucket: "prepwise-27b95.firebasestorage.app",
  messagingSenderId: "495387984487",
  appId: "1:495387984487:web:611901420570ffd4f10ac2",
  measurementId: "G-NNBSR43WLJ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
