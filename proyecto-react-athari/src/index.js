import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeYl41JSESNxblwMJpJjbxvU1XE76OnA4",
  authDomain: "athari-digital.firebaseapp.com",
  projectId: "athari-digital",
  storageBucket: "athari-digital.appspot.com",
  messagingSenderId: "833668088028",
  appId: "1:833668088028:web:69bcfa4732379360ff7419"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

