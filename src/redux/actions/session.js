import * as types from '../types';

export const loginUserRequest = () => ({
  type: types.LOGIN_USER_REQUEST,
});

export const loginUserSuccess = payload => ({
  type: types.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserError = error => ({
  type: types.LOGIN_USER_ERROR,
  payload: error,
});

export const signupUserRequest = () => ({
  type: types.SIGNUP_USER_REQUEST,
});

export const signupUserSuccess = payload => ({
  type: types.SIGNUP_USER_SUCCESS,
  payload,
});

export const signupUserError = error => ({
  type: types.SIGNUP_USER_ERROR,
  payload: error,
});

export const logoutUser = () => ({
  type: types.LOGOUT,
});
