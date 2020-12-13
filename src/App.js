import React, { useState } from "react";

// Redux!!!! Start

import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux-model/actions";

import { ReactReduxContext } from 'react-redux';
  
import { createStore } from "redux";

// Redux slut?


//firebase start

import firestore from "./js/firebase" // Dessa 2 behövs alltså för att utnyttja databasen (denna och nedan)

// TEMP

import usePromise from "./api/usePromise"
import * as ImgurSource from "./api/ImgurSource"

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
