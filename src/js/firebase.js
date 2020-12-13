import firebase from "firebase/app"; // eventuellt flytta ut alla firebase-saker
import "firebase/firestore";
import "firebase/auth"; // kanske inte


!firebase.apps.length && firebase.initializeApp({  // Måste ha villkor här! Annars kan den starta flera appar
  apiKey: "AIzaSyBeI9K3HQD9avIWuRGQJeojgxJbcYdGj8E",
  authDomain: "pictoswapgame-bb041.firebaseapp.com",
  databaseURL: "https://pictoswapgame-bb041.firebaseio.com",
  projectId: "pictoswapgame-bb041",
  storageBucket: "pictoswapgame-bb041.appspot.com",
  messagingSenderId: "597010699394",
  appId: "1:597010699394:web:e90f3a136a25d95d79109b",
  measurementId: "G-S8CGZD4MXN"

});

// OBS tog bort en grej härifrån - kom åt genom att skriva firebase.firestore()

const firestore = firebase.firestore();

// exempelanrop tidigare: const scoreStoreRef = firestore.collection("highScores");

export default firestore;