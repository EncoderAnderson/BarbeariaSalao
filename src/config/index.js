import firebase from 'firebase/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzilw9H8scSu9ZgrfbYtcNTknUl2hujTc",
  authDomain: "barbearias-e-saloes-rede-x.firebaseapp.com",
  databaseURL: "https://barbearias-e-saloes-rede-x-default-rtdb.firebaseio.com",
  projectId: "barbearias-e-saloes-rede-x",
  storageBucket: "barbearias-e-saloes-rede-x.appspot.com",
  messagingSenderId: "782181412468",
  appId: "1:782181412468:web:6856495f9a04d1ef8ceb21",
  measurementId: "G-XC7R1GGWH4"
};

// Initialize Firebase      
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default auth = getAuth(app);

