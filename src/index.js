import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import { save, load } from "redux-localstorage-simple";

import App from './components/app';
import reducers from './reducers';
import './assets/styles/style.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, save({namespace: "weather-storage"}))(createStore);
const store = createStoreWithMiddleware(
    reducers,
    load({namespace: "weather-storage"})
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
	document.getElementById('root')
)
