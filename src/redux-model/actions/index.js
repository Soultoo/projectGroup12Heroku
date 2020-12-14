
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

export const setPhotoURL = (URL) => {
  return {
    type:"SETPHOTOURL",
    payload:URL
  }
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

export const promiseAction = (dispatch, promise, actionType) => {
  if(!promise)
       return {type:actionType, payload:null};  // no ongoing promise
  promise.then(data=>dispatch({payload:data.data, type:actionType}))
          .catch(error=>dispatch({payload:error, type:actionType}));
  return {type:actionType, payload:{}}; 
                              // ongoing promise, no data or error yet
}

export const setDifficulty = (nr) => {
  return {
    type: "SETDIFFICULTY",
    payload: nr
  }
}