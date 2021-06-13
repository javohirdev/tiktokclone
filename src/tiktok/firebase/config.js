import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBWqK4wZdFgzAdTZD2-8xBiyGUDU3pWoeA",
    authDomain: "tiktokreact-ad719.firebaseapp.com",
    projectId: "tiktokreact-ad719",
    storageBucket: "tiktokreact-ad719.appspot.com",
    messagingSenderId: "413494993764",
    appId: "1:413494993764:web:5c5005b5816acface99071",
    measurementId: "G-E0XK0DGRVB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;