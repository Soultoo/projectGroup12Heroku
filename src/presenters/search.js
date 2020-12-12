import React, { useState, useEffect } from "react";
import { searchAlbums, getImages } from "../api/ImgurSource";
import { SearchFormView, SearchResultsView } from "../views/search/searchView";
//import usePromise from "../api/usePromise";
import promiseNoData from "../api/promiseNoData";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchPromise, setImagePromise, setSearchQuery, usePromiseAction} from "../redux-model/actions";
import { Images } from "./images";

export const Search= () => {
    const dispatch = useDispatch();
    const query = useSelector(state => state.searchQueryRed);
    const searchReducer = useSelector(state => state.searchPromiseRed);
    const albumPromise = useSelector(state => state.imagePromise);
    const promise = usePromiseAction(dispatch(), searchAlbums( query ), searchReducer);
    
    //console.log(data);
    return ( 
       <React.Fragment>
            <SearchFormView 
            onText={query => dispatch(setSearchQuery(query)) } 
            onSearch={() => dispatch(promise)}/>
           
            </React.Fragment>
    );
}
/*
{promiseNoData(promise, data, error) || <SearchResultsView searchResults = { data.data } chosenAlbum={(albumid) => dispatch(setImagePromise(getImages(albumid)))  }/>}
           {(!albumPromise)? "" : <Images album={albumPromise}/>} 
       
           */