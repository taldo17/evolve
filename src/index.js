import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCUrPmeiDPYhUQCjJXaV9jC3mhfdK_8gI8",
    authDomain: "evolve-sparkaton-2021.firebaseapp.com",
    projectId: "evolve-sparkaton-2021",
    storageBucket: "evolve-sparkaton-2021.appspot.com",
    messagingSenderId: "420221811671",
    appId: "1:420221811671:web:07afb4e76c32dba0d42992",
    measurementId: "G-4FRB75VGCS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
