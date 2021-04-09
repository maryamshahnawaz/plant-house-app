import firebase from 'firebase/app';
//import the database info from the firebase module
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIxK81IeFG-PH7DxYCny4PnPJ6iIbh4BM",
  authDomain: "plants-fa031.firebaseapp.com",
  projectId: "plants-fa031",
  storageBucket: "plants-fa031.appspot.com",
  messagingSenderId: "199840136763",
  appId: "1:199840136763:web:9352c00d3e74bdc4ff261e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;