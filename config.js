import firebase from 'firebase';
require('@firebase/firestore')
 var firebaseConfig = {
    apiKey: "AIzaSyCmfEfDHOUQCT8_U3T-mzjXbq-NYZ2MycA",
    authDomain: "to-do-list-e8350.firebaseapp.com",
    projectId: "to-do-list-e8350",
    storageBucket: "to-do-list-e8350.appspot.com",
    messagingSenderId: "25354227553",
    appId: "1:25354227553:web:9af56de4c83ac07efb7f20"
  };

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();

