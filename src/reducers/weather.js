import {FETCH_WEATHER, DELETE_LOCATION, FETCH_CURRENT_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        case DELETE_LOCATION:
            return state.filter(item => {
                return item.city.id !== action.id
            });
        case FETCH_CURRENT_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}
