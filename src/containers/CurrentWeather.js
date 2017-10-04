import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class CurrentWeather extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="current-weather">
                test
            </div>
        );
    }
}
