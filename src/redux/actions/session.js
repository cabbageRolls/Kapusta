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

export const signupUserRequest = response => ({
  type: types.SIGNUP_USER_REQUEST,
  payload: { response },
});

export const signupUserSuccess = error => ({
  type: types.SIGNUP_USER_SUCCES,
  payload: { error },
});

export const signupUserError = () => ({
  type: types.SIGNUP_USER_ERROR,
});

export const logout = () => ({
  type: types.LOGOUT,
});
