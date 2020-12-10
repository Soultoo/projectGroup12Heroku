// Ska dispalya counter och kunna ändra på den

// INTE KLAR LÄGG IN RESTEN

import { React } from "react" // den här importen kanske ska vara useDispatch

import { connect } from "react-redux";
import { increment } from "../redux-model/actions";

import CounterView from "../views/CounterView";


const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment())
  }
}



export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CounterView);