/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as API from '../../services/api';
import {
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
} from '../actions/session';

export const login = credentials => dispatch => {
  dispatch(loginUserRequest());

  axios
    .post(API.userLogin, credentials)
    .then(response => {
      console.log(response);
      dispatch(loginUserSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(loginUserError(error));
    });
};
