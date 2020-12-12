
import { combineReducers } from "redux";

export const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state- 1;
  }
  return state;
};


export const gameRunRed = (state = false, action) => {
  switch(action) {
    case "TURNOFFGAME":
      return false;
    case "TURNONGAME":
      return true;
  }
  return state;
}

export const numberOfTilesRed = (state = 4, action) => {
  return (action.payload && action.type == "SETNUMBEROFTILES") ? action.payload : state;
}

export const searchQueryRed = (state = "", action) => {
  return ((action.payload || action.payload === "") && action.type == "SETSEARCHQUERY") ? action.payload : state;
}

export const searchPromiseRed = (state = "", action)=>{
  return ((action.payload || action.payload === "") && action.type == "SETSEARCHPROMISE") ? action.payload : state;
}

export const imagePromiseRed = (state = "", action) => {
  return ((action.payload || action.payload === "") && action.type == "SETIMAGEPROMISE") ? action.payload : state;
}

export const chosenAlbumRed = (state = false, action) => {
  return ((action.payload || action.payload === "") && action.type == "SETCHOSENALBUM") ? action.payload : state;

}

// Combined Reducer

export const allReducers = combineReducers({
  counter: counter,
  gameRunRed:gameRunRed,
  numberOfTilesRed:numberOfTilesRed,
  searchQueryRed:searchQueryRed,
  searchPromise: searchPromiseRed,
  imagePromise: imagePromiseRed,
  chosenAlbumRed: chosenAlbumRed
});
