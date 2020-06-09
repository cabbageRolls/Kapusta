import * as types from '../types';

const getCategoriesStarted = () => ({
  type: types.GET_CATEGORIES_STARTED,
});
const getCategoriesSuccess = data => ({
  type: types.GET_CATEGORIES_SUCCESS,
  payload: data,
});
const getCategoriesFailure = data => ({
  type: types.GET_CATEGORIES_FAILURE,
  payload: {
    error: data,
  },
});
export default {
  getCategoriesStarted,
  getCategoriesSuccess,
  getCategoriesFailure,
};
