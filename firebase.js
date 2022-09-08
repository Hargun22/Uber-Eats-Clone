//import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuUlxjk3_qg_UfeGPWOQL3pdv3bOGUNNk",
  authDomain: "uber-eats-clone-eb467.firebaseapp.com",
  projectId: "uber-eats-clone-eb467",
  storageBucket: "uber-eats-clone-eb467.appspot.com",
  messagingSenderId: "1072019015708",
  appId: "1:1072019015708:web:99fcee21d90388de6e77d9",
};

// !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.apps();

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
