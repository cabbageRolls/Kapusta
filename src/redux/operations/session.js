import axios from 'axios';
import * as API from '../../services/api';
import { setAuthToken, clearAuthToken } from './token';
import {
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  signupUserRequest,
  signupUserSuccess,
  signupUserError,
  logoutUser,
} from '../actions/session';

export const login = credentials => dispatch => {
  dispatch(loginUserRequest());

  axios
    .post(API.userLogin, credentials)
    .then(response => {
      setAuthToken(response.data.user.token);
      dispatch(loginUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(loginUserError(error));
    });
};

export const signup = credentials => dispatch => {
  dispatch(signupUserRequest());

  axios
    .post(API.userRegister, credentials)
    .then(response => {
      setAuthToken(response.data.user.token);
      dispatch(signupUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(signupUserError(error));
    });
};

export const logout = () => dispatch => {
  clearAuthToken();
  dispatch(logoutUser());
};
