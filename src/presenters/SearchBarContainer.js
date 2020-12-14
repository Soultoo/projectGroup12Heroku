// INTE KLAR LÄGG IN RESTEN

import { React } from "react" // den här importen kanske ska vara useDispatch

import { connect } from "react-redux";


import { useSelector, useDispatch } from "react-redux";

import SetUpGameView from "../views/SetUpGameView";



import { searchAlbums } from "../api/ImgurSource"

// actions:

import { setSearchQuery, promiseAction, setPhotoURL } from "../redux-model/actions";

import { memo } from "react";

// förbereda props



const SearchBarContainer = ({nav}) => {

  const dispatch = useDispatch();

  const query = useSelector((state)=>state.searchQueryRed)

  const mapStateToProps = (state) => {
    return {nop:"nop"}
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      setSearchQuery: (q) => dispatch(setSearchQuery(q)),
    }
  }

  const SearchBar = memo(() => {
    return (
      <input autoFocus value={query} type="search" class="search" onChange={(e)=>dispatch(setSearchQuery(e.target.value))} placeholder={"Example: Cats"}>
      </input>
    )
  })

  return <SearchBar/>;
}

export default SearchBarContainer;