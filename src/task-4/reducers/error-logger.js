import { FETCH_WEEK_FAILURE } from "../actions/week-forecast";
import { FETCH_DAY_FAILURE } from '../actions/day-forecast';
import { DELETE_ERROR } from '../actions/delete-error'

  const errors = (state = [], action) => {
    switch (action.type) {
      case FETCH_WEEK_FAILURE : 
          return state.concat([action.error]);

      case FETCH_DAY_FAILURE : 
          return state.concat([action.error]);

      case DELETE_ERROR : 
      return state.filter((el, i) => i !== action.id);

      default :
          return state;
  }
};

  export { errors };