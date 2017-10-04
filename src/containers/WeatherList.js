import React, { Component } from 'react';
import { connect } from 'react-redux';
//
import { bindActionCreators } from 'redux';
import { deleteLocation } from '../actions/index';
//
class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    onDelete = (id) => {
        return () => {
            this.props.deleteLocation(id);
        }
    }

    renderWeather = (cityData) => {
        const cityName = cityData.city.name;
        const country = cityData.city.country;
        const desc = cityData.list[0].weather[0].main; // Clouds | Rain | Snow | Clear
        const temp = Math.round(cityData.list[0].main.temp);
        const timestamp = cityData.list[0].dt_txt;
        const id = cityData.city.id;

        console.log(`${cityName}: ${timestamp}`);
        return(
            <div key={cityName} className="item" data-target={id}>
                <div className={"weather-args " + desc.toLowerCase()}>
                    <p className="delete"
                        onClick={this.onDelete(id)}
                        data-target={id}>
                        &times;
                    </p>
                    <p className="city">{`${cityName} ${country}`}</p>
                    <p className="desc">{desc}</p>
                    <p className="temp">{temp}</p>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="items-container">
                    {this.props.weather.map(this.renderWeather)}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteLocation }, dispatch);
}
function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
