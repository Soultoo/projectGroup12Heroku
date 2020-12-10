export default function promiseNoData(promise, data, error){  
    return  !promise && "no data"     // case "0"  
          || error && <h1>Error</h1>   // case 3 
          || !data && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>     // case 1
}
