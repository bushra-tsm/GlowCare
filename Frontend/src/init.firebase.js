// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYpGzo1NtTrQxwOOpGpAS6AeeuHOd9Qtg",
  authDomain: "glowcare-52cdd.firebaseapp.com",
  projectId: "glowcare-52cdd",
  storageBucket: "glowcare-52cdd.appspot.com",
  messagingSenderId: "752967862651",
  appId: "1:752967862651:web:12b49ee2e59dd8d396d5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)