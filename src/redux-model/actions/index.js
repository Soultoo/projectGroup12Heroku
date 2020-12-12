
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

export const setBoardSize = (nr) => {
  return {
    type: "SETBOARDSIZE",
    payload: nr
  }
}
// index, position, image, width, height, boardSize (rows, cols)   