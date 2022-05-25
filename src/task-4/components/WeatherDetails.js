import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDayForecast } from "../actions/day-forecast";

class WeatherDetails extends React.Component {

    componentDidUpdate(prevProps){
        if(prevProps.selectedDt !== this.props.selectedDt){
            this.props.fetchDayForecast(this.props.selectedDt);
        }
    }

    render() {
        // const day = days[Object.keys(days)[0]];
        const forecast = this.props.forecast[this.props.selectedDt];
        
        if(forecast) {
            if(forecast.loading){
                return (
                    <div className="details">
                        <span className="fa fa-spinner fa-spin"></span>
                    </div>
                )
            }
            else if (forecast.error) {
                return (
                    <div className="details">
                        <div className="error">Error occurred during data fetch. Try to <button onClick={() => this.props.fetchDayForecast(this.props.selectedDt)}>reload</button>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="details">
                        <div className="day-name">
                            <div>{new Date(forecast.data.dt).toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'})}</div>
                            <img src={`img/${forecast.data.weather.icon}.png`} alt={forecast.data.weather.description} />
                        </div>
                        <div>
                            <dl>
                                <dt>Min temp</dt>
                                <dd>{Math.floor(forecast.data.temp.min)}&#x2103;</dd>
        
                                <dt>Max Temp</dt>
                                <dd>{Math.floor(forecast.data.temp.max)}&#x2103;</dd>
        
                                <dt>Weather</dt>
                                <dd>{forecast.data.weather.description}</dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>Wind</dt>
                                <dd>{Math.floor(forecast.data.speed)} m/s</dd>
        
                                <dt>Humidity</dt>
                                <dd>{forecast.data.humidity}%</dd>
        
                                <dt>Pressure</dt>
                                <dd>{forecast.data.pressure} hpa</dd>
                            </dl>
                        </div>
                    </div>
                );
            }
        }
        else {
            return null;
        }
    }
}

const mapStateToProps = state => ({
    selectedDt: state.selectedDt,
    forecast: state.dayForecast
});

const mapDispatchToProps = dispatch => ({
    fetchDayForecast: (dt) => dispatch(fetchDayForecast(dt))
});

WeatherDetails.propTypes = {
    fetchDayForecast: PropTypes.func.isRequired,
    selectedDt: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([null])
    ]),
    forecast: PropTypes.object
  };

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);