import { combineReducers } from "redux";

import { dayForecast, selectedDt } from "./day-forecast";
import { weekForecast, weekLoading, weekError } from "./week-forecast";
import { errors } from './error-logger';

export default combineReducers({
    dayForecast,
    selectedDt,
    weekForecast,
    weekLoading,
    weekError,
    errors
});
