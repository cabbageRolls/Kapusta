import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const alertReducer = (state = INITIAL_STATE.alert, { payload, type }) => {
  switch (type) {
    case types.SET_ALERT_ON:
      return { ...payload, open: true };
    case types.SET_ALERT_OFF:
      return { ...state, open: false };
    default:
      return state;
  }
};
export default alertReducer;
