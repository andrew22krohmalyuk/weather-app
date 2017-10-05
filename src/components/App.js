import React, { Component } from "react";
import { render } from "react-dom";

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component  {
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <SearchBar />
                    <WeatherList />
                </div>
            </div>
        );
    }
}
