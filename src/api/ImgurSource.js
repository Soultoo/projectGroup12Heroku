import myHeaders from "../api/apiConfig";


// tutorial version
const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/58/";   // the DH2642 proxy server
const API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

function handleHTTPError(response) {
    if (response.ok)
        return response;
    throw Error(response.statusText);
}


function apiCall( params, requestOptions ) {
      
    return fetch(BASE_URL + params, {
        "method": "GET",
        "headers": {
            'X-Mashape-Key': API_KEY
        }
    })
    .then(handleHTTPError)
    .then(response => response.json());

    /*
    //Version för Imgur, har inte fixat en config för vårt gemensamma mejl så just nu kan det inte funka
    //Men något mer saknas också för får i nuläget bara ut null av detta...
    return fetch("https://api.imgur.com/3/" + params, requestOptions)
        .then(handleHTTPError)
        .then(response => response.json());
     */
}

export default function searchImages( query ) {
   // Recept test API
    let searchString;
    (!query) ? searchString = "" : searchString = ("query=" + query);
    return apiCall("recipes/search?" + new URLSearchParams(searchString))
    .then(data => (data.results));

     /*
     // Imgur API setup version
    let formdata = new FormData();

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    let searchString;
    (!query) ? searchString = "" : searchString = "q=" + query;

    return apiCall("gallery/search/?" + new URLSearchParams(searchString), requestOptions)
    .then(data => (data.results));
    */
}





//  Get information about an image.
//  