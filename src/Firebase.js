// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZRBebV6VmjqUMouCbN4VjGWkZ9hKQQsA",
  authDomain: "scam-website-f9ba6.firebaseapp.com",
  projectId: "scam-website-f9ba6",
  storageBucket: "scam-website-f9ba6.firebasestorage.app",
  messagingSenderId: "18872611201",
  appId: "1:18872611201:web:7698628ef6373bc6f6b880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };