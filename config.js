import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBs_FOEgjY14ATVD6CE3qdt-19ism3wtjQ",
    authDomain: "booksanta-ffbaf.firebaseapp.com",
    databaseURL: "https://booksanta-ffbaf.firebaseio.com",
    projectId: "booksanta-ffbaf",
    storageBucket: "booksanta-ffbaf.appspot.com",
    messagingSenderId: "494395619582",
    appId: "1:494395619582:web:d9c60eabe1b737cc47cdaf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
