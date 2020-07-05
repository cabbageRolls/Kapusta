import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const currentDate = (state = INITIAL_STATE.currentDate, { payload, type }) => {
  switch (type) {
    case types.SET_CURRENT_DATE:
      return payload;
    default:
      return state;
  }
};
export default currentDate;
