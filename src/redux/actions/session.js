import * as types from '../types';

export const loginUserRequest = () => ({
  type: types.LOGIN_USER_REQUEST,
});

export const loginUserSuccess = response => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: { response },
});

export const loginUserError = error => ({
  type: types.LOGIN_USER_ERROR,
  payload: { error },
});

export const signupUserRequest = () => ({
  type: types.SIGNUP_USER_REQUEST,
});

export const signupUserSuccess = response => ({
  type: types.SIGNUP_USER_SUCCESS,
  payload: { response },
});

export const signupUserError = error => ({
  type: types.SIGNUP_USER_ERROR,
  payload: { error },
});

export const logout = () => ({
  type: types.LOGOUT,
});
