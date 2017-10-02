import { combineReducers } from 'redux';
import WeatherReducer from './weather';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
