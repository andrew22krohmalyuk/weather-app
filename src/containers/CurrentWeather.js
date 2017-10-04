import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDataByIp } from '../actions/index';

class CurrentWeather extends Component  {

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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDataByIp }, dispatch);
}
// function mapStateToProps({weather}) {
//     return { weather };
// }
export default connect(null, mapDispatchToProps)(CurrentWeather);
