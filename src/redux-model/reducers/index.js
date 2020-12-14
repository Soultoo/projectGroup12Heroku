
import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";
import { getWidth } from "../actions";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state- 1;
      case "RESETGAME":
        return 0;
  }
  return state;
};


export const gameRunRed = (state = false, action) => {
  switch(action) {
    case "TURNOFFGAME":
      return false;
    case "TURNONGAME":
      return true;
    case "RESETGAME":
      return false;
  }
  return state;
}

export const numberOfTilesRed = (state = 4, action) => {
  return (action.payload && action.type == "SETNUMBEROFTILES") ? action.payload : state;
}

export const searchQueryRed = (state = "", action) => {
  return ((action.payload || action.payload === "") && action.type == "SETSEARCHQUERY") ? action.payload : state;
}


export const photoURLRed = (state="", action) => {
  return ((action.payload || action.payload === "") && action.type == "SETPHOTOURL") ? action.payload : state;
}



// MÅSTE HA ERROR HANDLING!!!!
export const searchResultsRed = (state=[], action) => {
  if ((action.payload || action.payload === []) && action.type == "SETSEARCHRESULTS" 
    && !(Object.keys(action.payload).length === 0 && action.payload.constructor === Object)) 
    return action.payload;
  
  return [];
}



export const stopWatchRunningRed = (state = false, action) => {
  switch(action.type) {
    case "STARTTIMER":
      return true;
    case "STOPTIMER":
      return false;
  }
  return state;
}

export const stopWatchTimeRed = (state={m:0, s:0}, action) => {
  if (action.type == "INCREMENT1SEC") {
    const minutes = state.m;
    const seconds = state.s;
    return (seconds === 59) ? {m:minutes+1, s:0} : {m:minutes, s:seconds+1} ;
  }
  else if ((action.payload) && action.type == "RESETSTOPWATCH")
    return {m:0, s:0};
  
  return {m:0, s:0};
}




export const widthReducer = (state="", action) => {
  if (action.payload && action.type == "GETWIDTH") {
    return action.payload;
  }
  return "";
}


export const searchPromiseRed = (state = "", action)=>{
  return ((action.payload || action.payload === "") && action.type == "SETSEARCHPROMISE") ? action.payload : state;
}

export const imagePromiseRed = (state = null, action) => {
  return ((action.payload || action.payload === null) && action.type == "SETIMAGEPROMISE") ? action.payload : state;
}

export const chosenAlbumRed = (state = false, action) => {
  return ((action.payload || action.payload === "") && action.type == "SETCHOSENALBUM") ? action.payload : state;

}

export const highscoreRed =(state=0, action)=>{
  return (action.payload && action.type == "SETHIGHSCORE") ? action.payload : state;
}



// Combined Reducer

export const allReducers = combineReducers({
  counter: counter,
  gameRunRed:gameRunRed,
  numberOfTilesRed:numberOfTilesRed,
  searchQueryRed:searchQueryRed,

  widthReducer:widthReducer,

  stopWatchRunningRed:stopWatchRunningRed,

  stopWatchTimeRed:stopWatchTimeRed,

  searchResultsRed:searchResultsRed,
  photoURLRed:photoURLRed,


  searchPromise: searchPromiseRed,
  imagePromise: imagePromiseRed,
  chosenAlbumRed: chosenAlbumRed,

  highscore:highscoreRed
});
// index, position, image, width, height, boardSize (rows, cols)