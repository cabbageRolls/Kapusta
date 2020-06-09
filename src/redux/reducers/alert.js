import * as types from '../types';

export default function alertReducer(
  state = { type: 'success', text: 'Message', open: false },
  action,
) {
  switch (action.type) {
    case types.SET_ALERT_ON:
      return { ...action.payload, open: true };
    case types.SET_ALERT_OFF:
      return { ...state, open: false };
    default:
      return state;
  }
}
