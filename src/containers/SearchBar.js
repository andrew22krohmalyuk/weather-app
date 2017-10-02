import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component  {
    constructor(props) {
        super(props)

        this.state = { term: '' };
    }

    onInputChange = (e) => {
        this.setState( { term: e.target.value } )
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        //We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState( { term: '' } );
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Input city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                <div className="btn-container">
                    <a className="btn"
                       onClick={this.onFormSubmit}
                    >Add</a>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
