import * as types from '../types';
import { combineReducers } from 'redux';
import INITIAL_STATE from '../INITIAL_STATE';

const month = (state = INITIAL_STATE.dataPicker.month, { type }) => {
  switch (type) {
    case types.DO_INCREMENT:
      return state === 12 ? (state = 1) : state + 1;
    case types.DO_DECREMENT:
      return state === 1 ? (state = 12) : state - 1;
    default:
      return state;
  }
};

const year = (state = INITIAL_STATE.dataPicker.year, { type, payload }) => {
  switch (type) {
    case types.DO_INCREMENT:
      return payload === 12 ? state + 1 : state;
    case types.DO_DECREMENT:
      return payload === 1 ? state - 1 : state;
    default:
      return state;
  }
};

const dataPickerReducer = combineReducers({
  month,
  year,
});
export default dataPickerReducer;
