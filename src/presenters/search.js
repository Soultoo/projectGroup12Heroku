import React, { useState, useEffect } from "react";
import searchImages from "../api/ImgurSource";
import SearchFormView from "../views/search/searchFormView";
import SearchResultsView from "../views/search/searchResultsView";
import usePromise from "../api/usePromise";
import promiseNoData from "../api/promiseNoData";

export default function Search() {
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = React.useState(null);
    React.useEffect(() => setPromise(searchImages()),
        []); 
    const [data, error] = usePromise(promise);
    console.log(data);
    return (SearchFormView({
        onText: query => setQuery( query ),
        onSearch: () => setPromise(searchImages( query ).then(console.log(data)))
    })
        ,promiseNoData(promise, data, error) || SearchResultsView( {data} )
    );
}


