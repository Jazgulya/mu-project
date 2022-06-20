import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmb-jCQdCoEEXSqJEuzwwYoI5G5Fvd5IQ",
  authDomain: "alfiya-d6c47.firebaseapp.com",
  projectId: "alfiya-d6c47",
  storageBucket: "alfiya-d6c47.appspot.com",
  messagingSenderId: "357459330493",
  appId: "1:357459330493:web:47b23a5da12aabd62fbed4",
  measurementId: "G-PWSMPFTHLD"
};

export default fire.initializeApp(firebaseConfig);
