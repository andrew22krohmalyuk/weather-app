import { createStore } from 'redux'
import reducer from '../reducers/index'
import {loadState, saveState} from '../localStorage/index';

const store = createStore(reducer);

store.subscribe(() => {
    console.log('test1');
})

export default store;
