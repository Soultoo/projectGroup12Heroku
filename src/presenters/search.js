import React, { useState, useEffect } from "react";
import { searchAlbums } from "../api/ImgurSource";
import { SearchFormView, SearchResultsView } from "../views/search/searchView";
import usePromise from "../api/usePromise";
import promiseNoData from "../api/promiseNoData";

export default function Search() {
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = React.useState(null);
    const [album, setChosenAlbum] = React.useState(null);   // borde vara redux state
    React.useEffect(() => setPromise(searchAlbums()),
        []); 
    const [data, error] = usePromise(promise);
    
    console.log(data);
    return (
       <React.Fragment>
            <SearchFormView onText={query => setQuery( query )} onSearch={() => setPromise(searchAlbums( query ))}/>
           
           {promiseNoData(promise, data, error) || <SearchResultsView searchResults = { data.data } chosenAlbum={album => setChosenAlbum(album) }/>} 
        </React.Fragment>
    );
}
