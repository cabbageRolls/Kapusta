import * as types from '../types';
import { combineReducers } from 'redux';
import INITIAL_STATE from '../INITIAL_STATE';

const month = (state = INITIAL_STATE.dataPicker.month, { type }) => {
  switch (type) {
    case types.DO_INCREMENT:
      return state + 1;
    case types.DO_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const year = (state = INITIAL_STATE.dataPicker.year, { type }) => {
  switch (type) {
    case types.DO_INCREMENT:
      return state + 1;
    case types.DO_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const dataPickerReducer = combineReducers({
  month,
  year,
});
export default dataPickerReducer;
