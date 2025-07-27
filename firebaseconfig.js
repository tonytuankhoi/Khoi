import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPUBwXQhhd_CfiwsAtJgc_GF2IVBk01qs",
  authDomain: "cuoikhoa-8bef5.firebaseapp.com",
  projectId: "cuoikhoa-8bef5",
  storageBucket: "cuoikhoa-8bef5.firebasestorage.app",
  messagingSenderId: "658549382274",
  appId: "1:658549382274:web:edf0f890a77c704cb5289b",
  measurementId: "G-FQHWY59NP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
