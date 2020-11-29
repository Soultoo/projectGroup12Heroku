import React, { useState, useEffect } from "react";
import searchImages from "../api/ImgurSource";
import SearchFormView from "../views/search/searchFormView";
import SearchResultsView from "../views/search/searchResultsView";
import usePromise from "../api/usePromise";
import promiseNoData from "../api/promiseNoData";

export default function Search() {
    const [query, setQuery] = React.useState("");
    const [promise, setPromise] = React.useState(null);
    React.useEffect(() => setPromise(searchImages("tofu")),
        [query]); 
    const [data, error] = usePromise(promise);

   /* return (<div>
        <input type="text" onChange={event => setQuery(event.target.value)}></input>
        <button onClick={() => setPromise(searchImages( query ))}>Search!</button>
    </div>);
    */
    return (SearchFormView({
        onText: query => setQuery( query ),
        onSearch: () => setPromise(searchImages( query ))
    })
        , promiseNoData(promise, data, error) || SearchResultsView({ data })
    );
}


