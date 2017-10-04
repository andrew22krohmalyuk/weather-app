import React, { Component } from "react";
import { render } from "react-dom";

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';
import CurrentWeather from '../containers/CurrentWeather';

export default class App extends Component  {
    render() {
        return (
            <div className="app">
                <CurrentWeather />
                <div className="wrapper">
                    <SearchBar />
                    <WeatherList />
                </div>
            </div>
        );
    }
}
