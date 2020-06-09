import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const error = (state = INITIAL_STATE.error, { payload, type }) => {
  switch (type) {
    case types.GET_TRANSACTIONS_FAILURE:
    case types.POST_BALANCE_FAILURE:
    case types.LOGIN_USER_ERROR:
    case types.SIGNUP_USER_ERROR:
      return payload;
    default:
      return state;
  }
};

export default error;
