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
    //Kommentera bort för att kunna dubbelkolla att vi får ut data
    //console.log(data);
    return (
        //HERE is issues
        //det här, från kommentaren längst ner:  ,promiseNoData(promise, data, error) || SearchResultsView( {searchResults: data} )
        //behöver bli översatt till att fungera på något sätt, kanske enligt modellen nedanför
       <React.Fragment>
            <SearchFormView onText={query => setQuery( query )} onSearch={() => setPromise(searchImages( query ))}/>
           
            <promiseNoData/>||<SearchResultsView searchResults = { data }/>
        </React.Fragment>
    );
}
        
        /*
        SearchFormView( {onText: query => setQuery( query ), onSearch: () => setPromise(searchImages( query )) } )
        ,promiseNoData(promise, data, error) || SearchResultsView( {searchResults: data} )
    );
}*/


