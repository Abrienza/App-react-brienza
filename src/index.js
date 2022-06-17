import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/style.css";

import 'bootstrap/dist/css/bootstrap.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4FWFU2liGtJGGv7s3S-AgGggiMAkiBA4",
  authDomain: "brienza-fire.firebaseapp.com",
  projectId: "brienza-fire",
  storageBucket: "brienza-fire.appspot.com",
  messagingSenderId: "569796650345",
  appId: "1:569796650345:web:75adca54c376e140c109f8"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
