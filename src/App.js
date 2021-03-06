import React, { useState } from "react";


import firebase from "firebase/app"; // eventuellt flytta ut alla firebase-saker
import "firebase/firestore";
import "firebase/auth";

import { useCollectionData } from "react-firebase-hooks/firestore"; // Varför klammrar runt det vi importerar?

// Redux!!!! Start

import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux-model/actions";

import { ReactReduxContext } from 'react-redux';
  
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








function testDB() {
  const collTest = firestore.collection("highScores").doc("testId");
  collTest.get()
    .then(doc => {

      const data = doc.data();

    }

    )
  
}

function InitialScoreThing() {
  // får göra requests upp till 15 stycken
  // ska alltså
  const scoreStoreRef = firestore.collection("highScores");
  const query = scoreStoreRef.orderBy("score", "desc").limit(15);
  const [scores] = useCollectionData(query,{idField:"id"})
  return (
    <div> 
      <table>
        {scores && scores.map(scoreElement => (
          <tr key={scoreElement.name}>
            <td>{scoreElement.name}  </td> <td>{scoreElement.score}</td>
          </tr>
        )
        )}
      </table>

      <button onClick = {()=>scoreStoreRef.add({name:"cool", score:2})}>:)</button>
    </div>
  );

}


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
  ImgurSource.searchAlbums("dog").then(x=>{
    console.log(x.data[1])
    setPhotoURL(x.data[1].images[0].link)

  });




  const counter = useSelector(state=> state.counter);
  const numberOfTiles = useSelector(state=> state.numberOfTilesRed);
  const query = useSelector(state=> state.searchQueryRed);
  const searchResults = useSelector(state=> state.searchResultsRed);

  console.log(counter);
  const dispatch = useDispatch();

  testDB();

  const oldReturn = (
    <div className="App">
      <header className="App-header">
        Counter: {counter}
        <button onClick={()=>dispatch(actions.increment())}>
          +
        </button>

        <div>
          <button onClick={()=>dispatch(actions.promiseAction(
            dispatch, 
            ImgurSource.searchAlbums(query), 
            "SETSEARCHRESULTS")
            )}>Search!</button>
            <script>{console.log(searchResults.filter(x=>(x.images) ? true : false).map(x=>x.images[0].link))}</script>
          api-sak 2: {
            searchResults.filter(x=>(x.images) ? true : false).map(x=><img 
              src={x.images[0].link}
              alt="wow"
              width="100px"
              ></img>)
          }</div>

        <div> api-sak: <img src={photoURL} height="100px" width="100px"></img></div>
        <p> number of tiles: {numberOfTiles} </p>
        <p> Current query: {query} </p>
        <p> Search: 
          <input onChange={(event)=> {dispatch(actions.setSearchQuery(event.target.value));
          }}>
          </input>
        </p>
      </header>
      <div>
        <InitialScoreThing/>
      </div>
      <CounterContainer/>
    </div>
  );

  return (
    <div className="App">
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
