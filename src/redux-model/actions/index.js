
export const increment = () => {
  return {
    type:"INCREMENT"
  }
}

export const decrement = () => {
  return {
    type:"DECREMENT"
  }
}



export const turnOffGame = () => {
  return {type:"TURNOFFGAME"};
}

export const turnOnGame = () => {
  return {type:"TURNONGAME"};
}



export const setNumberOfTiles = (nr) => {
  return {
    type: "SETNUMBEROFTILES",
    payload: nr
  }
}


export const setSearchQuery = (query) => {
  return {
    type: "SETSEARCHQUERY",
    payload: query
  }
}


export const setSearchPromise = (promise) => {
  return {
    type: "SETSEARCHPROMISE",
    payload: promise
  }
}

export const setImagePromise = (promise) => {
  return {
    type: "SETIMAGEPROMISE",
    payload: promise
  }
}


export const setChosenAlbum = (id) => {
  return {
    type:"SETCHOSENALBUM",
    payload:id
}

}
