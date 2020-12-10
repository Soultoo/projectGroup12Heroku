import React, { useState, useEffect } from "react";
import searchImages from "../api/ImgurSource";
import { SearchFormView, SearchResultsView } from "../views/search/searchView";
import usePromise from "../api/usePromise";
import promiseNoData from "../api/promiseNoData";

export default function Search() {
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = React.useState(null);
    React.useEffect(() => setPromise(searchImages()),
        []); 
    const [data, error] = usePromise(promise);
    
    console.log(data);
    return (
       <React.Fragment>
            <SearchFormView onText={query => setQuery( query )} onSearch={() => setPromise(searchImages( query ))}/>
           
           {promiseNoData(promise, data, error) || <SearchResultsView searchResults = { data.data }/>} 
        </React.Fragment>
    );
}
