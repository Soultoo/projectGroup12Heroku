// reducern

export const stopWatchTimeRed = (state={m:0, s:0}, action) => {
  if (action.type == "INCREMENT1SEC") {
    const minutes = state.m;
    const seconds = state.s;
    return (s === 59) ? {m:minutes+1, s:0} : {m:minutes, s:seconds+1} ;
  }
  else if (action.payload) && action.type == "RESETSTOPWATCH"
    return {m:0, s:0};
  
  return {m:0, s:0};
}

export const stopWatchRunRed = (state = false, action) => {
  switch(action) {
    case "PAUSESTOPWATCH":
      return false;
    case "STARTSTOPWATCH":
      return true; 
    case "RESETSTOPWATCH":
      return false;
  }
  return state;
}

// Actions för tidtagaruret:

const delay = (ms) {
  return new Promise(resolve => setTimeOut(resolve,ms));
}

//För att öka med en sekund: 
dispatch(promiseAction(dispatch, delay(1000), "INCREMENT1SEC"))








// Lägg till denna till combinedreducer