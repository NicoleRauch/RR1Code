import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";

import App from "./App";
import reducers from './reducers';

const store = createStore(reducers,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);

