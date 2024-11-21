// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlckmf4HgT1GR8Xi6Xtj82hT68cuabxtU",
  authDomain: "winter-workshops-e13f3.firebaseapp.com",
  projectId: "winter-workshops-e13f3",
  storageBucket: "winter-workshops-e13f3.appspot.com",
  messagingSenderId: "51530591054",
  appId: "1:51530591054:web:9375797a2f7a31fb288c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};