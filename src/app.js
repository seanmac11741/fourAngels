// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxkA3nKGTBv8QktDx1mkUpJ0cbBzvWaOE",
    authDomain: "four-angels.firebaseapp.com",
    projectId: "four-angels",
    storageBucket: "four-angels.firebasestorage.app",
    messagingSenderId: "111885120186",
    appId: "1:111885120186:web:0f112fa55cff671463c883",
    measurementId: "G-6HF1MQ5SPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);