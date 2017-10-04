import {FETCH_WEATHER} from '../actions/index';
import {DELETE_LOCATION} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        case DELETE_LOCATION:
            return state.filter(item => {
                return item.city.id !== action.id
            });
    }
    return state;
}
