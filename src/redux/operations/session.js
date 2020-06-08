import axios from 'axios';
import * as API from '../../services/api';
import {
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  signupUserRequest,
  signupUserSuccess,
  signupUserError,
} from '../actions/session';

export const login = credentials => dispatch => {
  dispatch(loginUserRequest());

  axios
    .post(API.userLogin, credentials)
    .then(response => {
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
      dispatch(signupUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(signupUserError(error));
    });
};
