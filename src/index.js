import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';
import { loadState, saveState } from './localStorage/index';
import './assets/styles/style.scss';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(reducers);

store.subscribe(() => {
  console.log('test');
})

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
	document.getElementById('root')
)
