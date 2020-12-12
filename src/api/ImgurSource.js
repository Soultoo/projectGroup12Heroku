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

export const searchAlbums=( query ) =>{
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

    let searchString;
    (!query) ? searchString = "cats" : searchString =  query;

    return apiCall("gallery/search/?mature=false&q=" + new URLSearchParams(searchString), requestOptions);
    // lagt till mature=false för att förhoppningsvis censurera en aning :3
    
}
export const getImages=(id)=>{
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
    let searchparam;
    (!id) ? searchparam = "": searchparam = id;
    return apiCall("gallery/album/" + new URLSearchParams(searchparam), requestOptions);
    //.then(results => results.images);

}
