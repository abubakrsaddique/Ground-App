import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdd0SGwDXlL-vNoOuiN0inBWfxwhL0shk",
  authDomain: "ground-app-a4df0.firebaseapp.com",
  projectId: "ground-app-a4df0",
  storageBucket: "ground-app-a4df0.appspot.com",
  messagingSenderId: "200475211547",
  appId: "1:200475211547:web:e28bf6fd7eef1f506405be",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storageRef = firebase.storage().ref();

export { firebase, auth, firestore, storageRef };
