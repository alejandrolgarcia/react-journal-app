import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCDdW9QNsfpNO2SrvjcmYejw6qgSTSYBco",
    authDomain: "react-journal-app-5a5df.firebaseapp.com",
    databaseURL: "https://react-journal-app-5a5df.firebaseio.com",
    projectId: "react-journal-app-5a5df",
    storageBucket: "react-journal-app-5a5df.appspot.com",
    messagingSenderId: "702352382023",
    appId: "1:702352382023:web:aac1299292aae89dc67962"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
