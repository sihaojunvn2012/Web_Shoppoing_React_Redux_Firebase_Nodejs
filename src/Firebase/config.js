import * as firebase from 'firebase' 


const config = {
    apiKey: "AIzaSyAzT28-b3mPickRI2ibcVratJ-p1ouBoh4",
    authDomain: "web-shopping-1ee2a.firebaseapp.com",
    databaseURL: "https://web-shopping-1ee2a.firebaseio.com",
    projectId: "web-shopping-1ee2a",
    storageBucket: "web-shopping-1ee2a.appspot.com",
    messagingSenderId: "160820034148"
  };
  firebase.initializeApp(config);
  export const db = firebase.firestore();