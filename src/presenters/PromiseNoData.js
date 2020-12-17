function promiseNoData(promise, data, error){
  return (!promise && "no data" // case "0"
  
    || error && <h1>{error.toString()}</h1> // case 3
    || !data && <img src="photos/loading.gif" /> // case 1
    || false
  )
}