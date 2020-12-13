import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// De verkar vilja att man stoppar in reduxgrejerna här så har dem här tillfälligt ELLER INTE abort

// redux

import { createStore } from "redux";



import { Provider } from "react-redux";

import { allReducers } from "./redux-model/reducers";




let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);