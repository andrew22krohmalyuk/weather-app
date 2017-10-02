import React, { Component } from "react";
import { render } from "react-dom";
import SearchBar from '../containers/SearchBar';

export default class App extends Component  {
    render() {
        return (
            <div className="app">
                <SearchBar />
            </div>
        );
    }
}
