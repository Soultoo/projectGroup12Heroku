import React, { useState, useEffect } from "react";
import { searchAlbums, getImages } from "../api/ImgurSource";
import { SearchFormView, SearchResultsView } from "../views/search/searchView";
import usePromise from "../api/usePromise";
import promiseNoData from "../api/promiseNoData";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchPromise, setImagePromise, setSearchQuery, setChosenAlbum } from "../redux-model/actions";
import { Images } from "./images";

export const Search= () => {
    const dispatch = useDispatch();
    const query = useSelector(state => state.searchQueryRed);
    const promise = useSelector(state => state.searchPromise);
    const album = useSelector(state => state.chosenAlbumRed);
    const [data, error] = usePromise(promise);
    
    //console.log(data);
    return (
       <React.Fragment>
            <SearchFormView onText={query => dispatch(setSearchQuery(query)) } onSearch={() => dispatch(setSearchPromise(searchAlbums( query )))}/>
           
           {promiseNoData(promise, data, error) || <SearchResultsView searchResults = { data.data } chosenAlbum={(albumid) => dispatch(setImagePromise(getImages(albumid))) } imageTrigger = { (albumid)=>dispatch(setChosenAlbum(albumid)) }/>}
           {(!album)? "" : <Images/>} 
        </React.Fragment>
    );
}
