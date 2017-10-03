import axios from 'axios';

const API_KEY = '15045facd0050157699179e9577326d8';
const URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${URL}&q=${city}&units=metric`;
    const req = axios.get(url);

    console.log('Request: ', req);

    return{
        type: FETCH_WEATHER,
        payload: req
    };
}
