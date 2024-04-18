// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA7ISj_EVfWbHWLMgGjP9yrFTJJ0eykoBI",
  authDomain: "dcc-kozhikode.firebaseapp.com",
  databaseURL: "https://dcc-kozhikode-default-rtdb.firebaseio.com",
  projectId: "dcc-kozhikode",
  storageBucket: "dcc-kozhikode.appspot.com",
  messagingSenderId: "948485897282",
  appId: "1:948485897282:web:54922eb2c1bb893a1ec1db",
  measurementId: "G-5ZK03W4L4E"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const messaging = typeof window !== "undefined" ? getMessaging(app) : null;

export {app, auth, messaging}