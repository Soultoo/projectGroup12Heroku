import React, { useState } from "react";


import firebase from "firebase/app"; // eventuellt flytta ut alla firebase-saker
import "firebase/firestore";
import "firebase/auth";

import { useCollectionData } from "react-firebase-hooks/firestore"; // Varför klammrar runt det vi importerar?

// Redux!!!! Start

import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux-model/actions";

import { ReactReduxContext } from 'react-redux';
  

import { store } from "./index"

import { createStore } from "redux";

// Containers / presenters
import CounterContainer from "./presenters/CounterContainer";
import HomeScreenContainer from "./presenters/HomeScreenContainer";
import HighScoreContainer from "./presenters/HighScoreContainer";
import SetUpGameContainer from "./presenters/SetUpGameContainer";
import GameContainer from "./presenters/GameContainer";


import "./css/styles.css";


// TEMP

import usePromise from "./api/usePromise"
import * as ImgurSource from "./api/ImgurSource"


// Redux slut?

import Show from "./js/show";


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




// Skriv all kod här så den funkar, sen lägga över den i enskilda filer

const firestore = firebase.firestore();





// Navigation

const setUpGameNav=()=> window.location.hash="setupgame";
const highScoreNav=()=> window.location.hash="highscores";
const homeScreenNav=()=> window.location.hash="homescreen";
const gameNav=()=> window.location.hash="game";


function defaultRoute(){
  if(! ["#setupgame", "#highscores", "#homescreen", "#game"].find(knownRoute=>
      (knownRoute === window.location.hash)))
      window.location.hash="#homescreen";
}

defaultRoute();

window.addEventListener("hashchange", ()=>defaultRoute());







function App() {

  

  const [photoURL, setPhotoURL] = useState("")
// Hittar bildtyp i albumet.images[indexFörArrayen].type, ska nog exkludera annat än bilder
  


  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve,ms));
  }

  const counter = useSelector(state=> state.counter);
  const numberOfTiles = useSelector(state=> state.numberOfTilesRed);
  const query = useSelector(state=> state.searchQueryRed);
  const searchResults = useSelector(state=> state.searchResultsRed);
  const width = useSelector(state=> state.widthReducer);
  const stopWatchRunning = useSelector(state=>state.stopWatchRunningRed)

  const time = useSelector(state=> state.stopWatchTimeRed)

  const dispatch = useDispatch();

  /*window.onload = function() {
    const secondTimer = setInterval(()=>{

   
      if (stopWatchRunning) dispatch(actions.increment1Sec())
    }, 1000)
  }*/

    function getWidth(dispatch)  {
      const url = "https://i.pinimg.com/564x/c3/2c/39/c32c392ba8920f0508c1309e86aba437.jpg"
      let img = new Image()
      img.addEventListener("load", function(){
        dispatch(actions.getWidth(this.naturalWidth.toString()))
      })
      img.src = url
    }


  let clockRunning = false;

  

  return (
    <div className="App" onLoad={null}>
      <header className="App-header">
      </header>
      <Show hash="#homescreen">
        <HomeScreenContainer nav = {[setUpGameNav, highScoreNav]}/>
      </Show>
      <Show hash="#highscores">
        <HighScoreContainer nav = {[homeScreenNav, setUpGameNav]}/>
      </Show>
      <Show hash="#setupgame">
        <SetUpGameContainer nav = {[homeScreenNav, gameNav]}/>
      </Show>
      <Show hash="#game">
        <GameContainer nav = {[setUpGameNav, highScoreNav]}/>
      </Show>
      
    </div>
    )

}

export default App;
