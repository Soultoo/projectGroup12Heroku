// INTE KLAR LÄGG IN RESTEN

import { React } from "react" // den här importen kanske ska vara useDispatch

import { connect } from "react-redux";


import { useSelector, useDispatch } from "react-redux";

import SetUpGameView from "../views/SetUpGameView";

import { searchAlbums } from "../api/ImgurSource"

// actions:

import { setSearchQuery, promiseAction, setPhotoURL } from "../redux-model/actions"

// förbereda props
const SetUpGameContainer = ({nav}) => {

  const dispatch = useDispatch();

  const mapStateToProps = (state) => {
    return {
      query: state.searchQueryRed,
      searchResults: state.searchResultsRed,
      photoURL:state.photoURLRed
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      setSearchQuery: (q) => dispatch(setSearchQuery(q)),
      promiseAction: (dispatch,promise,actionName) => dispatch(promiseAction(dispatch,promise,actionName)),
      setPhotoURL: (URL) => dispatch(setPhotoURL(URL))
    }
  }

  const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SetUpGameView);
  
  return <Connected dispatch={dispatch} searchAlbums={searchAlbums} nav={nav}/>;
}





// mappings








export default SetUpGameContainer;