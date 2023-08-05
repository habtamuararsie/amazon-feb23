// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK0OQCmepsoofRWkfpOzWM8IpleWb4Z9M",
  authDomain: "feb23-3388b.firebaseapp.com",
  projectId: "feb23-3388b",
  storageBucket: "feb23-3388b.appspot.com",
  messagingSenderId: "282807845001",
  appId: "1:282807845001:web:acbe79b0fbb4902e528658",
  measurementId: "G-MY2SMRM393"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const auth = getAuth(firebaseApp)

export  { db, auth };


// "@emotion/react": "^11.11.1",
// //     "@emotion/styled": "^11.11.0",
// "@mui/icons-material": "^5.14.1",
// "@mui/material": "^5.14.1",