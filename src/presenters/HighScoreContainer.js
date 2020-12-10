// Ska dispalya counter och kunna ändra på den

// INTE KLAR LÄGG IN RESTEN

import { React } from "react" // den här importen kanske ska vara useDispatch

import { connect } from "react-redux";

import HighScoreView from "../views/HighScoreView";





export default connect(
)(HighScoreView);