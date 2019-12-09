import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7_sq7YlScE1uVjRxoWENaPfW5TaAHqis",
    authDomain: "whatsapp-clone-2020.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-2020.firebaseio.com",
    projectId: "whatsapp-clone-2020",
    storageBucket: "whatsapp-clone-2020.appspot.com",
    messagingSenderId: "81638963500",
    appId: "1:81638963500:web:bc41a09a203440dee79489"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();