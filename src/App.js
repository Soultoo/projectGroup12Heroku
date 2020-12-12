import React from "react";

// Redux!!!! Start

import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux-model/actions";

import { ReactReduxContext } from 'react-redux';
  
import { createStore } from "redux";

// Redux slut?


//firebase start

import firestore from "./js/firebase" // Dessa 2 behövs alltså för att utnyttja databasen (denna och nedan)

import { useCollectionData } from "react-firebase-hooks/firestore";  //tillfällig

//firebase slut

import Show from "./js/show";

// Containers / presenters
import CounterContainer from "./presenters/CounterContainer";
import HomeScreenContainer from "./presenters/HomeScreenContainer";
import HighScoreContainer from "./presenters/HighScoreContainer";
import SetUpGameContainer from "./presenters/SetUpGameContainer";
import GameContainer from "./presenters/GameContainer";

// Style

import "./css/styles.css";


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

// Style









function App() {
  const counter = useSelector(state=> state.counter);
  const numberOfTiles = useSelector(state=> state.numberOfTilesRed);
  const query = useSelector(state=> state.searchQueryRed);
  const dispatch = useDispatch();

  const oldReturn = (
    <div className="App">
      <header className="App-header">
        Counter: {counter}
        <button onClick={()=>dispatch(actions.increment())}>
          +
        </button>
        <p> number of tiles: {numberOfTiles} </p>
        <p> Current query: {query} </p>
        <p> Search: 
          <input onChange={(event)=> {dispatch(actions.setSearchQuery(event.target.value));
          }}>
          </input>
        </p>
      </header>
      <div>
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
