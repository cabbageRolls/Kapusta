import { combineReducers } from 'redux';
import * as types from '../types';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER_SUCCESS:
    case types.SIGNUP_USER_SUCCESS:
      console.log(payload.response.user.userData);
      return payload.response.user.userData;

    case types.LOGOUT:
      return null;

    default:
      return state;
  }
};

const authenticated = (state = false, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER_SUCCESS:
    case types.SIGNUP_USER_SUCCESS:
      return true;

    case types.LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.LOGIN_USER_SUCCESS:
    case types.SIGNUP_USER_SUCCESS:
      return payload.response.user.token;

    case types.LOGOUT:
      return null;

    default:
      return state;
  }
};

const session = combineReducers({
  user,
  authenticated,
  token,
});

export default session;
