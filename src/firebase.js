import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDMsTrW6XtoZHOW8UUiOhjpO5Q8l_TPNxk",
  authDomain: "prueba-login-edbcc.firebaseapp.com",
  databaseURL: "https://prueba-login-edbcc.firebaseio.com",
  projectId: "prueba-login-edbcc",
  storageBucket: "prueba-login-edbcc.appspot.com",
  messagingSenderId: "343584627012"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const ref = firebase.database().ref();

export default firebase;
