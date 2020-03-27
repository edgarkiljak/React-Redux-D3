import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'jwt-login-a7c52.firebaseapp.com',
  databaseURL: 'https://jwt-login-a7c52.firebaseio.com',
  projectId: 'jwt-login-a7c52',
  storageBucket: 'jwt-login-a7c52.appspot.com',
  messagingSenderId: '354523814165',
  appId: '1:354523814165:web:c61236726fbfec1bbab11c',
  measurementId: 'G-ZP1HQDLERY'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
