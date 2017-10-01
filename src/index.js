import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";


import App from './components/app';
import reducers from './reducers';

render(
    <h1>Hello world!</h1>,
    document.getElementById('root')
)
