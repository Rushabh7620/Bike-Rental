import firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBAjuWESK_xiUA04j83RJxv50-YVOflCj8",
    authDomain: "bike-rental-42782.firebaseapp.com",
    projectId: "bike-rental-42782",
    storageBucket: "bike-rental-42782.appspot.com",
    messagingSenderId: "1083674428551",
    appId: "1:1083674428551:web:b846e02cb18afc00666422"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }