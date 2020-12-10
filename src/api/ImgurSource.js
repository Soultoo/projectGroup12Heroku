import myHeaders from "../api/apiConfig";

function handleHTTPError(response) {
    if (response.ok)
        return response;
    throw Error(response.statusText);
}


function apiCall( params, requestOptions ) {
  
    return fetch("https://api.imgur.com/3/" + params, requestOptions)
        .then(handleHTTPError)
        .then(response => response.json());
}

export default function searchImages( query ) {
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

    let searchString;
    (!query) ? searchString = "cats" : searchString =  query;

    return apiCall("gallery/search/?q=" + new URLSearchParams(searchString), requestOptions);
    
}
