// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCEvy4oR-XQo2TtxlNdJLVB7XQTHv1wxbs",
    authDomain: "matchfix-392e0.firebaseapp.com",
    databaseURL: "https://matchfix-392e0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "matchfix-392e0",
    storageBucket: "matchfix-392e0.appspot.com",
    messagingSenderId: "1043817285661",
    appId: "1:1043817285661:web:171b9dca3d70d686485ef4",
    measurementId: "G-VE67W87PQG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth, firebase}