import firebase from 'firebase/app';
//import the database info from the firebase module
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKrdkA5D9wdqZw3AUOXGz1jkp904AxcLU",
  authDomain: "plant-house-app-1a9b1.firebaseapp.com",
  projectId: "plant-house-app-1a9b1",
  storageBucket: "plant-house-app-1a9b1.appspot.com",
  messagingSenderId: "875900809238",
  appId: "1:875900809238:web:4b14cde67b8da169574537"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;