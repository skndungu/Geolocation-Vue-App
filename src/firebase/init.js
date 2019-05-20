import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMWBz8CtzcbGOe7ts-lCbpo991s5Zii6A",
    authDomain: "geo-ninja-74a35.firebaseapp.com",
    databaseURL: "https://geo-ninja-74a35.firebaseio.com",
    projectId: "geo-ninja-74a35",
    storageBucket: "geo-ninja-74a35.appspot.com",
    messagingSenderId: "868527151281",
    appId: "1:868527151281:web:87bcb897f663c07c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()