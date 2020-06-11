import * as types from '../types';

export const setAlertOnAction = ({ type, text }) => {
  return {
    type: types.SET_ALERT_ON,
    payload: { type, text },
  };
};

export const setAlertOffAction = () => {
  return {
    type: types.SET_ALERT_OFF,
  };
};
