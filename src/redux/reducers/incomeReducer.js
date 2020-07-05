import { combineReducers } from 'redux';
import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const postIncomeReducer = (state = INITIAL_STATE.income, { payload, type }) => {
  switch (type) {
    case types.POST_INCOME_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const deleteIncomeReducer = (
  state = INITIAL_STATE.income,
  { payload, type },
) => {
  switch (type) {
    case types.DELETE_INCOME_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  postIncomeReducer,
  deleteIncomeReducer,
});
