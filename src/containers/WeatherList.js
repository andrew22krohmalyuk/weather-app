import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    onDelete = (e) => {
        console.log('delete');
    }

    renderWeather = (cityData) => {
        const cityName = cityData.city.name;
        const country = cityData.city.country;
        const desc = cityData.list[0].weather[0].main; // Clouds | Rain | Snow | Clear
        const temp = Math.round(cityData.list[0].main.temp);
        const timestamp = cityData.list[0].dt_txt;

        console.log(`${cityName}: ${timestamp}`);

        return(
                <div key={cityName} className="item">
                    <div className={"weather-args " + desc.toLowerCase()}>
                        <p className="delete"
                            onClick={this.onDelete}>
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

function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
