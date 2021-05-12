// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA4vgTa3UYS-xrGG4FB2lEZSnJNYiRr-x0",
  authDomain: "netflix-clone-9223e.firebaseapp.com",
  projectId: "netflix-clone-9223e",
  storageBucket: "netflix-clone-9223e.appspot.com",
  messagingSenderId: "90714820264",
  appId: "1:90714820264:web:538d5e47ca60b0c5fd3c9d",
  measurementId: "G-32G7RRS548",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;