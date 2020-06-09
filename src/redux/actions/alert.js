import * as types from '../types';

export const setAlertOnAction = ({ type, message }) => {
  return {
    type: types.SET_ALERT_ON,
    payload: { type, message },
  };
};

export const setAlertOffAction = () => {
  return {
    type: types.SET_ALERT_OFF,
  };
};
