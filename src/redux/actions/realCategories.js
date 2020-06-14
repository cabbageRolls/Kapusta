import * as types from '../types';

export const GET_REAL_CATEGORIES_STARTED = () => ({
  type: types.GET_REAL_CATEGORIES_STARTED,
});
export const GET_REAL_CATEGORIES_SUCCESS = payload => ({
  type: types.GET_REAL_CATEGORIES_SUCCESS,
  payload,
});
export const GET_REAL_CATEGORIES_FAILURE = payload => ({
  type: types.GET_REAL_CATEGORIES_FAILURE,
  payload,
});
