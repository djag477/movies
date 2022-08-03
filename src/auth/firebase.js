// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnkgK0uMMSjIPW6ODMCvubA02zm7axGnk",
  authDomain: "movieapp-c5bb8.firebaseapp.com",
  projectId: "movieapp-c5bb8",
  storageBucket: "movieapp-c5bb8.appspot.com",
  messagingSenderId: "31316088826",
  appId: "1:31316088826:web:5d03d09d7642488ce67643",
  measurementId: "G-361WG7VWPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Create User
export const createUser = async (email, password, displayName) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: displayName });
    console.log(auth.currentUser);
  } catch (err) {
    alert(err.message);
  }
};
// Sign in

export const signIn = async (email, password) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    localStorage.setItem("token", userCredential.user.accessToken);
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  
};

// user observer

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpProvider = () => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const forgotPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      alert("Please check your mail box!");
    })
    .catch((err) => {
      alert(err.message);
      // ..
    });
};
